from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import DeleteView, UpdateView, CreateView, FormView
from django.urls import reverse_lazy
from .models import Todo
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect
# Create your views here.

class Index(ListView):
    model = Todo
    fields = '__all__'
    context_object_name = 'todos'
    template_name = 'practice_app/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['todos'] = context['todos'].filter(user=self.request.user)
        
        search_input = self.request.GET.get('search-text') or ''
        if search_input:
            context['todos'] = context['todos'].filter(title__startswith=search_input)
        
        context['search_input'] = search_input

        return context



class Delete(DeleteView):
    model = Todo
    context_object_name = 'todo'
    template_name = 'practice_app/delete.html'
    success_url = reverse_lazy('index')


class Update(UpdateView):
    model = Todo
    fields = '__all__'
    template_name = 'practice_app/update.html'
    success_url = reverse_lazy('index')


class Create(CreateView):
    model = Todo
    fields = '__all__'
    template_name = 'practice_app/create.html'
    context_object_name = 'form'
    success_url = reverse_lazy('index')

class Login(LoginView):
    template_name = 'practice_app/login.html'
    fields = '__all__'
    redirect_authnticated_user = True

    def get_success_url(self):
        return reverse_lazy('index')

class Register(FormView):
    template_name = 'practice_app/register.html'
    form_class = UserCreationForm
    redirect_authenticated_user = True
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        user = form.save()
        if user is not None:
            login(self.request, user)
        return super(Register, self).form_valid(form)

    """def get(self, *args, **kwargs):
        if self.request.user.is_authenticated():
            return redirect('index')
        return super(Register, self).get(*args, **kwargs)"""






