from django.db import models

# Create your models here.

class Quote(models.Model):
    author = models.CharField(max_length=100)
    body = models.TextField()
    context = models.CharField(max_length=240, blank=True)
    source = models.CharField(max_length=120, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.author

