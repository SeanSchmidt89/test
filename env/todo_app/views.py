from .models import *
from django.views.generic import ListView
from django.views.generic.edit import UpdateView, DeleteView, CreateView, FormView
from django.urls import reverse_lazy
from django.contrib.auth import login, logout
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.
class CustomLogin(LoginView):
    template_name = 'todo_app/login.html'
    fields = '__all__'
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('index')

class Index(ListView):
    model = Todo
    fields = '__all__'
    context_object_name = 'todos'
    template_name = 'todo_app/index.html'

class Update(LoginRequiredMixin, UpdateView):
    model = Todo
    fields = '__all__'
    template_name = 'todo_app/update.html'
    success_url = reverse_lazy('index')

class Delete(LoginRequiredMixin, DeleteView):
    model = Todo
    template_name = 'todo_app/delete.html'
    context_object_name = 'todo'
    success_url = reverse_lazy('index')

class Create(CreateView):
    model = Todo
    fields = '__all__'
    template_name = 'todo_app/create.html'
    success_url = reverse_lazy('index')
    
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(Create, self).form_valid(form)


class Register(FormView):
    template_name = 'todo_app/register.html'
    form_class = UserCreationForm
    redirect_authenticated_user = True
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        user = form.save()
        if user is not None:
            login(self.request, user)
        return super(Register, self).form_valid(form)

    def get(self, *args, **kwargs):
        if self.request.user.is_authenticated():
            return redirect('tasks')
        return super(Register, self).get(*args, **kwargs)

    