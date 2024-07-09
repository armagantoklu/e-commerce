# urls.py
from django.urls import path
from orderSession.views import OrderSessionAPIView

urlpatterns = [
    path('', OrderSessionAPIView.as_view(), name='orderSession-list-create'),
    path('<int:pk>', OrderSessionAPIView.as_view(), name='orderSession-detail'),
]
