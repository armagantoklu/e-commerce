# user/urls.py

from django.urls import path, include
from user.views import UserRegisterView

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', UserRegisterView.as_view(), name='custom_rest_register'),
]
