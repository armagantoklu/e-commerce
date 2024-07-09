# views.py
from rest_framework import generics, mixins, status
from rest_framework.response import Response
from role.models import Role
from role.serializers import RoleSerializer


class RoleAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

    def get_object(self):
        # Extract the 'id' from query parameters instead of the URL
        id = self.request.query_params.get('id')
        if not id:
            raise Response({"detail": "Method requires 'id' query parameter."}, status=status.HTTP_400_BAD_REQUEST)
        return generics.get_object_or_404(Role, id=id)

    def get(self, request, *args, **kwargs):
        if 'id' in request.query_params:
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        if 'id' not in request.query_params:
            return Response({"detail": "Method 'PUT' not allowed without 'id'."},
                            status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        if 'id' not in request.query_params:
            return Response({"detail": "Method 'DELETE' not allowed without 'id'."},
                            status=status.HTTP_405_METHOD_NOT_ALLOWED)

        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"detail": "Deletion successful."}, status=status.HTTP_200_OK)
