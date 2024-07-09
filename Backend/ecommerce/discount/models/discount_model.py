from django.db import models


class Discount(models.Model):
    rate = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    finished_at = models.DateTimeField(null=True)

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ['id']
