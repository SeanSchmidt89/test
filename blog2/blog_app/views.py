from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import DeleteView, ListView, UpdateView, DetailView, CreateView
from .forms import *
from django.contrib.auth.views import LoginView

from blog_app.models import Post

# Create your views here.


class IndexList(ListView):
    model = Post
    template_name = 'blog_app/index.html'
    context_object_name = 'posts'
    ordering = ['-post_date']


class PostUpdate(UpdateView):
    model = Post
    form_class = PostUpdate
    template_name = 'blog_app/update.html'
    success_url = reverse_lazy('index')


class PostDelete(DeleteView):
    model = Post
    template_name = 'blog_app/delete.html'
    success_url = reverse_lazy('index')


class AddPost(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'blog_app/addpost.html'
    success_url = reverse_lazy('index')


class PostDetails(DetailView):
    model = Post
    fields = "__all__"
    template_name = 'blog_app/postdetails.html'


class UserLogin(LoginView):
    template_name = 'blog_app/login.html'
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('index')
