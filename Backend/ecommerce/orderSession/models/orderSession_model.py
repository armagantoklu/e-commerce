from django.db import models


class OrderSession(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    finished_at = models.DateTimeField(null=True)

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ['id']
