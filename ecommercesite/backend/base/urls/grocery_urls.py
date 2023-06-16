from django.urls import path
from base.views import grocery_views as views

urlpatterns = [

    path('', views.getGrocerys, name="grocerys"),
    path('create/', views.createGrocery, name="grocery-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createGroceryReview, name="create-grocery-review"),
    path('top/', views.getTopGrocerys, name='top-grocerys'),
    path('<str:pk>/', views.getGrocery, name="grocery"),
    path('update/<str:pk>/', views.updateGrocery, name="grocery-update"),
    path('delete/<str:pk>/', views.deleteGrocery, name="grocery-delete"),
    
]