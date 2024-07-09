# urls.py
from django.urls import path
from messageSession.views import MessageSessionAPIView

urlpatterns = [
    path('', MessageSessionAPIView.as_view(), name='messageSession-list-create'),
    path('<int:pk>', MessageSessionAPIView.as_view(), name='messageSession-detail'),
]
