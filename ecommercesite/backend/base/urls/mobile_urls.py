from django.urls import path
from base.views import mobile_views as views

urlpatterns = [

    path('', views.getMobiles, name="mobiles"),
    path('create/', views.createMobile, name="mobile-create"),
    path('upload/', views.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', views.createMobileReview, name="create-mobile-review"),
    path('top/', views.getTopMobiles, name='top-mobiles'),
    path('<str:pk>/', views.getMobile, name="mobile"),
    path('update/<str:pk>/', views.updateMobile, name="mobile-update"),
    path('delete/<str:pk>/', views.deleteMobile, name="mobile-delete"),
]