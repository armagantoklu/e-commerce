from django.urls import path
from feedbackType.views import FeedbackTypeAPIView

urlpatterns = [
    path('', FeedbackTypeAPIView.as_view(), name='feedbackType-list-create'),
    path('<int:pk>', FeedbackTypeAPIView.as_view(), name='feedbackType-detail'),
]
