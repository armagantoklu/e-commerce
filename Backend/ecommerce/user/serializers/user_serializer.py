import sys

from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from user.serializers import NewUserDetailSerializer
from user.models import User


class UserRegisterationSerializer(RegisterSerializer):
    role = serializers.CharField()

    class Meta:
        model = User
        fields = "__all__"

    def get_cleaned_data(self):
        super(UserRegisterationSerializer, self).get_cleaned_data()
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'role': self.validated_data.get('role', ''),
        }

    def save(self, request):
        value = super().save(request)
        value.role = self.validated_data.get('role', '')
        value.save()
        return value

    def to_representation(self, instance):
        user_data = NewUserDetailSerializer(instance).data
        print(user_data, flush=True)
        return user_data
