from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from django.contrib.auth.models import User  # Kendi User modelinizi burada kullanabilirsiniz


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length=30, required=True)
    last_name = serializers.CharField(max_length=30, required=True)
    role = serializers.CharField(max_length=30, required=True)

    def save(self, request):
        user = super().save(request)
        user.first_name = self.validated_data.get('first_name')
        user.last_name = self.validated_data.get('last_name')
        user.role = self.validated_data.get('role')
        user.save()
        return user
