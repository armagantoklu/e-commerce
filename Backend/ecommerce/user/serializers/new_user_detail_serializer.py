from dj_rest_auth.serializers import UserDetailsSerializer, LoginSerializer

from user.models import User


class NewUserDetailSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        model = User
        fields = ('id', 'username', 'email', 'createdAt', 'updatedAt')


class NewLoginSerializer(LoginSerializer):

    def __init__(self, *args, **kwargs):
        print('calisti ', flush=True)
        super().__init__(*args, **kwargs)

    def validate(self, attrs):
        print('calisti1', flush=True)

        return super().validate(attrs)
