from django.urls import path
from feedback.views import FeedbackAPIView

urlpatterns = [
    path('', FeedbackAPIView.as_view(), name='feedbackType-list-create'),
    path('<int:pk>', FeedbackAPIView.as_view(), name='feedbackType-detail'),
]
