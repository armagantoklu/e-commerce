# urls.py
from django.urls import path
from product.views import ProductAPIView

urlpatterns = [
    path('', ProductAPIView.as_view(), name='product-list-create'),
    path('<int:pk>', ProductAPIView.as_view(), name='product-detail'),
]
