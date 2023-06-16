from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Grocery, Review
from base.grocerys import grocerys
from base.serializers import GrocerySerializer
from rest_framework import status


@api_view(['GET'])
def getGrocerys(request):
    query = request.query_params.get('keyword')
    print("query: ", query)
    if query == None:
        query = ''
    
    grocerys = Grocery.objects.filter(name__icontains = query)
    serializer = GrocerySerializer(grocerys, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getGrocery(request, pk):
    grocery = Grocery.objects.get(_id=pk)
    serializer = GrocerySerializer(grocery, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTopGrocerys(request):
    grocerys = Grocery.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = GrocerySerializer(grocerys, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createGrocery(request):
    user = request.user

    grocery = Grocery.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = GrocerySerializer(grocery, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateGrocery(request, pk):
    data = request.data
    grocery = Grocery.objects.get(_id=pk)

    grocery.name = data['name']
    grocery.price = data['price']
    grocery.brand = data['brand']
    grocery.countInStock = data['countInStock']
    grocery.category = data['category']
    grocery.description = data['description']

    grocery.save()

    serializer = GrocerySerializer(grocery, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteGrocery(request, pk):
    grocery = Grocery.objects.get(_id=pk)
    grocery.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    grocery_id = data['product_id']
    grocery = Grocery.objects.get(_id=grocery_id)

    grocery.image = request.FILES.get('image')
    grocery.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createGroceryReview(request, pk):
    user = request.user
    grocery = Grocery.objects.get(_id=pk)
    data = request.data
    # 1 - Review already exists
    alreadyExists = grocery.review_set.filter(user=user).exists()
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
            grocery=grocery,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = grocery.review_set.all()
        grocery.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        grocery.rating = total / len(reviews)
        grocery.save()
        return Response('Review Added')