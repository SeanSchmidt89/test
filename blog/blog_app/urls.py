from django.urls import path
from .views import *


urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('post_details/<int:pk>', PostDetail.as_view(), name='post_details')
]