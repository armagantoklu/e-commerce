# urls.py
from django.urls import path
from order.views import OrderAPIView

urlpatterns = [
    path('', OrderAPIView.as_view(), name='order-list-create'),
    path('<int:pk>', OrderAPIView.as_view(), name='order-detail'),
]
