from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    CHOICES = (
        ('High', 'High'),
        ('Medium', 'Medium'),
        ('Low', 'Low'),
    )

    name = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True),
    title = models.CharField(max_length=30)
    details = models.CharField(max_length=200)
    priority = models.CharField(max_length=6, choices=CHOICES)
    complete = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['priority']