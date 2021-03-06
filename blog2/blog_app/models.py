from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=40)
    body = models.CharField(max_length=300)
    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title + ' ' + str(self.user)


