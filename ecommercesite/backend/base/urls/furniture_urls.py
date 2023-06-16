from django.urls import path
from base.views import furniture_views as views

urlpatterns = [

    path('', views.getFurnitures, name="furnitures"),
    path('create/', views.createFurniture, name="furniture-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createFurnitureReview, name="create-furniture-review"),
    path('top/', views.getTopFurnitures, name='top-furnitures'),
    path('<str:pk>/', views.getFurniture, name="furniture"),
    path('update/<str:pk>/', views.updateFurniture, name="furniture-update"),
    path('delete/<str:pk>/', views.deleteFurniture, name="furniture-delete"),
    
]