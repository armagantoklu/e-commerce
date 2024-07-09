# urls.py
from django.urls import path
from discount.views import DiscountAPIView

urlpatterns = [
    path('', DiscountAPIView.as_view(), name='discount-list-create'),
    path('<int:pk>', DiscountAPIView.as_view(), name='discount-detail'),
]
