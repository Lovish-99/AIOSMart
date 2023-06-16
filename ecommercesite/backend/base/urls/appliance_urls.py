from django.urls import path
from base.views import appliance_views as views

urlpatterns = [

    path('', views.getAppliances, name="appliances"),
    path('create/', views.createAppliance, name="appliance-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createApplianceReview, name="create-appliance-review"),
    path('top/', views.getTopAppliances, name='top-appliances'),
    path('<str:pk>/', views.getAppliance, name="appliance"),
    path('update/<str:pk>/', views.updateAppliance, name="appliance-update"),
    path('delete/<str:pk>/', views.deleteAppliance, name="appliance-delete"),
]