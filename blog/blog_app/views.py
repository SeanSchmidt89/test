from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy, reverse
from django.views.generic import ListView, DetailView, DeleteView, CreateView, UpdateView
from .models import *
from .forms import PostForm, EditForm
from django.http import HttpResponseRedirect


# Create your views here.

class Index(ListView):
    model = Post
    template_name = 'blog_app/index.html'
    ordering = ['-post_date']

    def get_context_data(self, *args, **kwargs):
        cat_menu = Category.objects.all()
        context = super(Index, self).get_context_data(*args, **kwargs)
        context['cat_menu'] = cat_menu
        return context


class PostDetail(DeleteView):
    model = Post
    template_name = 'blog_app/post_details.html'

    def get_context_data(self, *args, **kwargs):
        cat_menu = Category.objects.all()
        context = super(PostDetail, self).get_context_data(*args, **kwargs)
        context['cat_menu'] = cat_menu
        return context


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


def CategoryListView(request):
    cat_menu_list = Category.objects.all()
    return render(request, 'blog_app/category_list.html', {'cat_menu_list':cat_menu_list})


def CategoryView(request, cats):
    category_posts = Post.objects.filter(category=cats.replace('-', ' '))

    return render(request, 'blog_app/categories.html', {'cats':cats.title().replace('-', ' '), 'category_posts':category_posts})


def LikeView(request, pk):
    post = get_object_or_404(Post, id=request.POST.get('post_id'))
    post.likes.add(request.user)
    return HttpResponseRedirect(reverse('post_details', args=[str(pk)]))
