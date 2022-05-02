from .models import Task
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.

class CustomLoginView(LoginView):
    template_name = 'todo_app/login.html'
    fields = '__all__'
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('tasks')

class TaskList(LoginRequiredMixin, ListView):
    model = Task
    context_object_name = 'tasks'
    template_name = 'todo_app/index.html'

class TaskDetail(DetailView):
    model = Task
    context_object_name = 'task'
    template_name = 'todo_app/task.html'

class TaskCreate(CreateView):
    model = Task
    fields = '__all__'
    template_name = 'todo_app/task_form.html'
    success_url = reverse_lazy('tasks')


class TaskUpdate(UpdateView):
    model = Task
    fields = '__all__'
    template_name = 'todo_app/task_form.html'
    success_url = reverse_lazy('tasks')

class TaskDelete(DeleteView):
    model = Task
    context_object_name = 'task'
    success_url = reverse_lazy('tasks')
    template_name = 'todo_app/delete.html'
 