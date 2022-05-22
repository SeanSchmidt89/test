from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, DeleteView, CreateView, UpdateView
from .models import *
from .forms import PostForm, EditForm


# Create your views here.

class Index(ListView):
    model = Post
    template_name = 'blog_app/index.html'
    ordering = ['-post_date']


class PostDetail(DeleteView):
    model = Post
    template_name = 'blog_app/post_details.html'


class CreatePost(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'blog_app/create_post.html'
    success_url = reverse_lazy('index')


class CreateCategory(CreateView):
    model = Category
    template_name = 'blog_app/create_category.html'
    fields = '__all__'
    success_url = reverse_lazy('index')


class UpdatePost(UpdateView):
    model = Post
    form_class = EditForm
    template_name = 'blog_app/update.html'
    success_url = reverse_lazy('index')

class DeletePostView(DeleteView):
    model = Post
    template_name = 'blog_app/delete.html'
    success_url = reverse_lazy('index')

def CategoryView(request, cats):
    category_posts = Post.objects.filter(category=cats.replace('-', ' '))

    return render(request, 'blog_app/categories.html', {'cats':cats.title().replace('-', ' '), 'category_posts':category_posts})