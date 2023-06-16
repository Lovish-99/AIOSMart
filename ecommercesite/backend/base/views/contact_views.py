from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializers import ContactSerializer
from base.models import ContactForm


@api_view(['POST'])
def createContact(request):
    data = request.data
    contact = ContactForm.objects.create(
        name = data['name'],
        number = data['number'],
        message = data['message']
    )

    serializer = ContactSerializer(contact, many=False)
    return Response(serializer.data)