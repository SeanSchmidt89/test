from django.shortcuts import render
from django.views.generic.edit import CreateView
from todo_app.models import Todo
from django.views.generic.list import ListView
from django.urls import reverse_lazy

# Create your views here.

class Index(ListView):
    model = Todo
    context_object_name = 'todos'
    template_name = 'todo_app/index.html'

class TodoCreate(CreateView):
    model = Todo
    fields = '__all__'
    template_name = 'todo_app/create.html'
    success_url = reverse_lazy('index')
