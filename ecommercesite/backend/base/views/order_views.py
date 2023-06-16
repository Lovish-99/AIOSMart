from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress, Mobile, Cloth, Furniture, Grocery, Laptop, Appliances
from base.serializers import ProductSerializer, OrderSerializer, MobileSerializer, ClothSerializer, FurnitureSerializer, ApplianceSerializer, LaptopSerializer, GrocerySerializer

from rest_framework import status
from datetime import datetime



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data
    orderItems = data['orderItems']
    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # (1) Create order
        order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            taxPrice=data['taxPrice'],
            shippingPrice=data['shippingPrice'],
            totalPrice=data['totalPrice']
        )
        # (2) Create shipping address
        shipping = ShippingAddress.objects.create(
            order=order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            postalCode=data['shippingAddress']['postalCode'],
            country=data['shippingAddress']['country'],
        )
        # (3) Create order items adn set order to orderItem relationship
        for i in orderItems:
            print(i)
            if i['category'] == 'Product':
                product = Product.objects.get(_id=i['product'])
                print(product)
                item = OrderItem.objects.create(
                    product=product,
                    order=order,
                    name=product.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=product.image.url,
                )
                # (4) Update stock
                product.countInStock -= item.qty
                product.save()


            elif i['category'] == 'Mobile':
                mobile = Mobile.objects.get(_id=i['product'])
                print(mobile)
                item = OrderItem.objects.create(
                    mobile=mobile,
                    order=order,
                    name=mobile.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=mobile.image.url,
                )
                # (4) Update stock
                mobile.countInStock -= item.qty
                mobile.save()


            elif i['category'] == 'Cloth':
                cloth = Cloth.objects.get(_id=i['product'])
                item = OrderItem.objects.create(
                    cloth=cloth,
                    order=order,
                    name=cloth.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=cloth.image.url,
                )
                # (4) Update stock
                cloth.countInStock -= item.qty
                cloth.save()


            elif i['category'] == 'Furniture':
                furniture = Furniture.objects.get(_id=i['product'])
                item = OrderItem.objects.create(
                    furniture=furniture,
                    order=order,
                    name=furniture.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=furniture.image.url,
                )
                # (4) Update stock
                furniture.countInStock -= item.qty
                furniture.save()


            elif i['category'] == 'Grocery':
                grocery = Grocery.objects.get(_id=i['product'])
                item = OrderItem.objects.create(
                    grocery=grocery,
                    order=order,
                    name=grocery.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=grocery.image.url,
                )
                # (4) Update stock
                grocery.countInStock -= item.qty
                grocery.save()


            elif i['category'] == 'Appliance':
                appliance = Appliances.objects.get(_id=i['product'])
                item = OrderItem.objects.create(
                    appliance=appliance,
                    order=order,
                    name=appliance.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=appliance.image.url,
                )
                # (4) Update stock
                appliance.countInStock -= item.qty
                appliance.save()


            else:
                laptop = Laptop.objects.get(_id=i['product'])
                item = OrderItem.objects.create(
                    laptop=laptop,
                    order=order,
                    name=laptop.name,
                    qty=i['qty'],
                    price=i['price'],
                    image=laptop.image.url,
                )
                # (4) Update stock
                laptop.countInStock -= item.qty
                laptop.save()


        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):
    user = request.user
    try:
        order = Order.objects.get(_id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response({'detail': 'Not authorized to view this order'},
                     status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail': 'Order does not exist'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request, pk):
    order = Order.objects.get(_id=pk)
    order.isPaid = True
    order.paidAt = datetime.now()
    order.save()
    return Response('Order was paid')


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOrderToDelivered(request, pk):
    order = Order.objects.get(_id=pk)
    order.isDelivered = True
    order.deliveredAt = datetime.now()
    order.save()
    return Response('Order was delivered')