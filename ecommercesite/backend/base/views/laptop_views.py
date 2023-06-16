from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Laptop, Review
from base.laptops import laptops
from base.serializers import LaptopSerializer
from rest_framework import status


@api_view(['GET'])
def getLaptops(request):
    query = request.query_params.get('keyword')
    print("query: ", query)
    if query == None:
        query = ''
    
    laptops = Laptop.objects.filter(name__icontains = query)
    serializer = LaptopSerializer(laptops, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLaptop(request, pk):
    laptop = Laptop.objects.get(_id=pk)
    serializer = LaptopSerializer(laptop, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTopLaptops(request):
    laptops = Laptop.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = LaptopSerializer(laptops, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createLaptop(request):
    user = request.user

    laptop = Laptop.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = LaptopSerializer(laptop, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateLaptop(request, pk):
    data = request.data
    laptop = Laptop.objects.get(_id=pk)

    laptop.name = data['name']
    laptop.price = data['price']
    laptop.brand = data['brand']
    laptop.countInStock = data['countInStock']
    laptop.category = data['category']
    laptop.description = data['description']

    laptop.save()

    serializer = LaptopSerializer(laptop, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteLaptop(request, pk):
    laptop = Laptop.objects.get(_id=pk)
    laptop.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    laptop_id = data['product_id']
    laptop = Laptop.objects.get(_id=laptop_id)

    laptop.image = request.FILES.get('image')
    laptop.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createLaptopReview(request, pk):
    user = request.user
    laptop = Laptop.objects.get(_id=pk)
    data = request.data
    # 1 - Review already exists
    alreadyExists = laptop.review_set.filter(user=user).exists()
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
            laptop=laptop,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = laptop.review_set.all()
        laptop.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        laptop.rating = total / len(reviews)
        laptop.save()
        return Response('Review Added')