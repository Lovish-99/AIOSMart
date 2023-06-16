from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Furniture, Review
from base.furnitures import furnitures
from base.serializers import FurnitureSerializer
from rest_framework import status


@api_view(['GET'])
def getFurnitures(request):
    query = request.query_params.get('keyword')
    print("query: ", query)
    if query == None:
        query = ''
    
    furnitures = Furniture.objects.filter(name__icontains = query)
    serializer = FurnitureSerializer(furnitures, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFurniture(request, pk):
    furniture = Furniture.objects.get(_id=pk)
    serializer = FurnitureSerializer(furniture, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTopFurnitures(request):
    furntiures = Furniture.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = FurnitureSerializer(furnitures, many=True)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def createFurniture(request):
    user = request.user

    furniture = Furniture.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = FurnitureSerializer(furniture, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateFurniture(request, pk):
    data = request.data
    furniture = Furniture.objects.get(_id=pk)

    furniture.name = data['name']
    furniture.price = data['price']
    furniture.brand = data['brand']
    furniture.countInStock = data['countInStock']
    furniture.category = data['category']
    furniture.description = data['description']

    furniture.save()

    serializer = FurnitureSerializer(furnitutre, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteFurniture(request, pk):
    furniture = Furniture.objects.get(_id=pk)
    furniture.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    furniture_id = data['product_id']
    furniture = Furniture.objects.get(_id=furniture_id)

    furniture.image = request.FILES.get('image')
    furniture.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createFurnitureReview(request, pk):
    user = request.user
    furniture = Furniture.objects.get(_id=pk)
    data = request.data
    # 1 - Review already exists
    alreadyExists = furniture.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            furniture=furniture,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = furniture.review_set.all()
        furniture.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        furniture.rating = total / len(reviews)
        furniture.save()
        return Response('Review Added')