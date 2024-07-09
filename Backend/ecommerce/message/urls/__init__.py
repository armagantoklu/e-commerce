from django.urls import path
from message.views import MessageAPIView

urlpatterns = [
    path('', MessageAPIView.as_view(), name='message-list-create'),
    path('<int:pk>', MessageAPIView.as_view(), name='message-detail'),
]
