# users/views.py

from dj_rest_auth.registration.views import RegisterView
from user.serializers import UserRegisterationSerializer, NewUserDetailSerializer
from rest_framework.response import Response
from rest_framework import status


class UserRegisterView(RegisterView):
    serializer_class = UserRegisterationSerializer

    def create(self, request, *args, **kwargs):
        serializer = UserRegisterationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        data = self.get_response_data(user)
        data['user'] = NewUserDetailSerializer(user, context=self.get_serializer_context()).data

        if data:
            response = Response(
                data,
                status=status.HTTP_201_CREATED,
                headers=headers,
            )
        else:
            response = Response(status=status.HTTP_204_NO_CONTENT, headers=headers)

        return response
