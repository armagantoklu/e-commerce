from rest_framework import serializers

from orderSession.models import OrderSession


class OrderSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderSession
        fields = '__all__'
