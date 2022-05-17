from django.shortcuts import render
from django.views.generic import ListView, DetailView, DeleteView
from .models import *
# Create your views here.

class Index(ListView):
    model = Post
    template_name = 'blog_app/index.html'

class PostDetail(DeleteView):
    model = Post
    template_name = 'blog_app/post_details.html'