from django.urls import path
from .views import *

urlpatterns = [
    path('', IndexList.as_view(), name='index'),
    path('update/<int:pk>/', PostUpdate.as_view(), name='update'),
]