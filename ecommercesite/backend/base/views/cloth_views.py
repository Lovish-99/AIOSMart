from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Cloth, Review
from base.clothes import clothes
from base.serializers import ClothSerializer
from rest_framework import status

@api_view(['GET'])
def getClothes(request):
    query = request.query_params.get('keyword')
    print("query: ", query)
    if query == None:
        query = ''
    
    clothes = Cloth.objects.filter(name__icontains = query)
    print(clothes)
    serializer = ClothSerializer(clothes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCloth(request, pk):
    cloth = Cloth.objects.get(_id=pk)
    serializer = ClothSerializer(cloth, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTopClothes(request):
    clothes = Cloth.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = ClothSerializer(clothes, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createCloth(request):
    user = request.user

    cloth = Cloth.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = ClothSerializer(cloth, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateCloth(request, pk):
    data = request.data
    cloth = Cloth.objects.get(_id=pk)

    cloth.name = data['name']
    cloth.price = data['price']
    cloth.brand = data['brand']
    cloth.countInStock = data['countInStock']
    cloth.category = data['category']
    cloth.description = data['description']

    cloth.save()

    serializer = ClothSerializer(cloth, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteCloth(request, pk):
    cloth = Cloth.objects.get(_id=pk)
    cloth.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    cloth_id = data['product_id']
    cloth = Cloth.objects.get(_id=cloth_id)

    cloth.image = request.FILES.get('image')
    cloth.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createClothReview(request, pk):
    user = request.user
    cloth = Cloth.objects.get(_id=pk)
    data = request.data
    # 1 - Review already exists
    alreadyExists = cloth.review_set.filter(user=user).exists()
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
            cloth=cloth,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = cloth.review_set.all()
        cloth.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        cloth.rating = total / len(reviews)
        cloth.save()
        return Response('Review Added')