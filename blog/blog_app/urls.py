from django.urls import path
from .views import *


urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('post_details/<int:pk>', PostDetail.as_view(), name='post_details'),
    path('create/', CreatePost.as_view(), name='create'),
    path('update/<int:pk>/', UpdatePost.as_view(), name='update'),
    path('delete_post/<int:pk>/', DeletePostView.as_view(), name='delete'),
    path('create_category/', CreateCategory.as_view(), name='create_category'),
    path('category/<str:cats>/', CategoryView, name='category'),
    path('category-list/', CategoryListView, name='category-list'),
]