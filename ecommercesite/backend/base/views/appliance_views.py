from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Appliances, Review
from base.appliances import appliances
from base.serializers import ApplianceSerializer
from rest_framework import status

@api_view(['GET'])
def getAppliances(request):
    query = request.query_params.get('keyword')
    print("query: ", query)
    if query == None:
        query = ''
    
    appliances = Appliances.objects.filter(name__icontains = query)
    serializer = ApplianceSerializer(appliances, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getAppliance(request, pk):
    appliance = Appliances.objects.get(_id=pk)
    serializer = ApplianceSerializer(appliance, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getTopAppliances(request):
    appliances = Appliances.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = ApplianceSerializer(appliances, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createAppliance(request):
    user = request.user

    appliance = Appliances.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = ApplianceSerializer(appliance, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateAppliance(request, pk):
    data = request.data
    appliance = Appliances.objects.get(_id=pk)

    appliance.name = data['name']
    appliance.price = data['price']
    appliance.brand = data['brand']
    appliance.countInStock = data['countInStock']
    appliance.category = data['category']
    appliance.description = data['description']

    appliance.save()

    serializer = ApplianceSerializer(appliance, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteAppliance(request, pk):
    appliance = Appliance.objects.get(_id=pk)
    appliance.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    appliance_id = data['product_id']
    appliance = Appliance.objects.get(_id=appliance_id)

    appliance.image = request.FILES.get('image')
    appliance.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createApplianceReview(request, pk):
    user = request.user
    appliance = Appliances.objects.get(_id=pk)
    data = request.data
    # 1 - Review already exists
    alreadyExists = appliance.review_set.filter(user=user).exists()
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
            appliance=appliance,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = appliance.review_set.all()
        appliance.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        appliance.rating = total / len(reviews)
        appliance.save()
        return Response('Review Added')
