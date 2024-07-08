from dj_rest_auth.serializers import UserDetailsSerializer

from user.models import User


class UserSerializer(UserDetailsSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'createdAt', 'updatedAt', 'role']
