from rest_framework import serializers

from messageSession.models import MessageSession


class MessageSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageSession
        fields = '__all__'
