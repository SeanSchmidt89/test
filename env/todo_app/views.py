from dataclasses import fields
from django.shortcuts import render
from .models import *
from django.views.generic import ListView
from django.views.generic.edit import UpdateView, DeleteView, CreateView, FormView
from django.urls import reverse_lazy
from django.contrib.auth import login, logout
from django.contrib.auth.views import LoginView, LogoutView
# Create your views here.

class Index(ListView):
    model = Todo
    fields = '__all__'
    context_object_name = 'todos'
    template_name = 'todo_app/index.html'

class Update(UpdateView):
    model = Todo
    fields = '__all__'
    template_name = 'todo_app/update.html'
    success_url = reverse_lazy('index')

class Delete(DeleteView):
    model = Todo
    template_name = 'todo_app/delete.html'
    context_object_name = 'todo'
    success_url = reverse_lazy('index')

class Create(CreateView):
    model = Todo
    fields = '__all__'
    template_name = 'todo_app/create.html'
    context_object_name = 'form'

class Login(LoginView):
    template_name = 'todo_app/login.html'
    fields = '__all__'
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('index')

