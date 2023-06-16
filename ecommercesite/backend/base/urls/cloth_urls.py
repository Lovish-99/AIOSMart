from django.urls import path
from base.views import cloth_views as views

urlpatterns = [

    path('', views.getClothes, name="clothes"),
    path('create/', views.createCloth, name="cloth-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createClothReview, name="create-cloth-review"),
    path('top/', views.getTopClothes, name='top-cloths'),
    path('<str:pk>/', views.getCloth, name="cloth"),
    path('update/<str:pk>/', views.updateCloth, name="cloth-update"),
    path('delete/<str:pk>/', views.deleteCloth, name="cloth-delete"),
]