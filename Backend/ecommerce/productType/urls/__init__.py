# urls.py
from django.urls import path
from productType.views import ProductTypeAPIView

urlpatterns = [
    path('', ProductTypeAPIView.as_view(), name='productType-list-create'),
    path('<int:pk>', ProductTypeAPIView.as_view(), name='productType-detail'),
]
