from django.urls import path
from base.views import laptop_views as views

urlpatterns = [

    path('', views.getLaptops, name="laptops"),
    path('create/', views.createLaptop, name="laptop-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createLaptopReview, name="create-laptop-review"),
    path('top/', views.getTopLaptops, name='top-laptops'),
    path('<str:pk>/', views.getLaptop, name="laptop"),
    path('update/<str:pk>/', views.updateLaptop, name="laptop-update"),
    path('delete/<str:pk>/', views.deleteLaptop, name="laptop-delete"),  
]