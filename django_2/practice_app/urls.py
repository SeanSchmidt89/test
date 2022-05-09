from django.urls import path
from .views import *

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('delete/<int:pk>/', Delete.as_view(), name='delete'),
    path('update/<int:pk>/', Update.as_view(), name='update'),
    path('create/', Create.as_view(), name='create'),
    path('login/', Login.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='index'), name='logout'),
    path('register/', Register.as_view(), name='register'),

]