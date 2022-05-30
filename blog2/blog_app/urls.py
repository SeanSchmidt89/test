from django.urls import path
from .views import *
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', IndexList.as_view(), name='index'),
    path('update/<int:pk>/', PostUpdate.as_view(), name='update'),
    path('delete/<int:pk>', PostDelete.as_view(), name='delete'),
    path('addpost', AddPost.as_view(), name='addpost'),
    path('postdetails/<int:pk>', PostDetails.as_view(), name='postdetails'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='index'), name='logout'),

]