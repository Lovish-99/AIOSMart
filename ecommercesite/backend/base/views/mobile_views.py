from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Mobile, Review
from base.mobiles import mobiles
from base.serializers import MobileSerializer
from rest_framework import status

@api_view(['GET'])
def getMobiles(request):
    query = request.query_params.get('keyword')
    print("query: ", query)
    if query == None:
        query = ''
    
    mobiles = Mobile.objects.filter(name__icontains = query)
    serializer = MobileSerializer(mobiles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTopMobiles(request):
    mobiles = Mobile.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = MobileSerializer(mobiles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getMobile(request, pk):
    mobile = Mobile.objects.get(_id=pk)
    serializer = MobileSerializer(mobile, many=False)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def createMobile(request):
    user = request.user

    mobile = Mobile.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = MobileSerializer(mobile, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateMobile(request, pk):
    data = request.data
    mobile = Mobile.objects.get(_id=pk)

    mobile.name = data['name']
    mobile.price = data['price']
    mobile.brand = data['brand']
    mobile.countInStock = data['countInStock']
    mobile.category = data['category']
    mobile.description = data['description']

    mobile.save()

    serializer = MobileSerializer(mobile, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteMobile(request, pk):
    mobile = Mobile.objects.get(_id=pk)
    mobile.delete()
    return Response('Producted Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    mobile_id = data['product_id']
    mobile = Mobile.objects.get(_id=mobile_id)

    mobile.image = request.FILES.get('image')
    mobile.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createMobileReview(request, pk):
    user = request.user
    mobile = Mobile.objects.get(_id=pk)
    data = request.data
    # 1 - Review already exists
    alreadyExists = mobile.review_set.filter(user=user).exists()
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
            mobile=mobile,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = mobile.review_set.all()
        mobile.numReviews = len(reviews)
        total = 0
        for i in reviews:
            total += i.rating
        mobile.rating = total / len(reviews)
        mobile.save()
        return Response('Review Added')
