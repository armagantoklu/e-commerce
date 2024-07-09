from rest_framework import serializers

from productType.models import ProductType


class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = '__all__'
