from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, Group, Permission
from django.db import models
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Eposta alanı gereklidir')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True, null=False, blank=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    createdAt = models.DateTimeField(default=timezone.now)
    updatedAt = models.DateTimeField(auto_now=True)
    role = models.CharField(max_length=50, blank=True, null=True)
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)

    objects = CustomUserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []


    def __str__(self):
        return self.username
