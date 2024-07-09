from rest_framework import serializers
from feedbackType.models import FeedbackType


class FeedBackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackType
        fields = '__all__'
