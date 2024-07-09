# urls.py
from django.urls import path
from role.views import RoleAPIView

urlpatterns = [
    path('', RoleAPIView.as_view(), name='role-list-create'),
    path('<int:pk>', RoleAPIView.as_view(), name='role-detail'),
]
