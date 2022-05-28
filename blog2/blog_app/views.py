from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import DeleteView, ListView, UpdateView, DetailView

from blog_app.models import Post

# Create your views here.


class IndexList(ListView):
    model = Post
    template_name = 'blog_app/index.html'
    context_object_name = 'posts'
    ordering = ['-post_date']


class PostUpdate(UpdateView):
    model = Post
    template_name = 'blog_app/update.html'
    fields = '__all__'
    success_url = reverse_lazy('index')