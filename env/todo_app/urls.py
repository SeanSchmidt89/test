from django.urls import path
from .models import *
from .views import *

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('update/<int:pk>/', Update.as_view(), name='update'),
    path('delete/<int:pk>/', Delete.as_view(), name='delete'),
    path('create/', Create.as_view(), name='create'),
]
