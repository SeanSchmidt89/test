from django.urls import path
from .models import *
from .views import *
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('login/', CustomLogin.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='index'), name='logout'),
    path('register/', Register.as_view(), name='register'),
    path('', Index.as_view(), name='index'),
    path('create/', Create.as_view(), name='create'),
    path('update/<int:pk>/', Update.as_view(), name='update'),
    path('delete/<int:pk>/', Delete.as_view(), name='delete'),
]
