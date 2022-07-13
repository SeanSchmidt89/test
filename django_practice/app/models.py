from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=255)
    created = models.DateField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def str(self):
        return self.title
