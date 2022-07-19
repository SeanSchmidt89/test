from django.shortcuts import render
from .models import Todo

# Create your views here.

def index(request):
    todos = Todo.objects.all()
    context = {
        'todos': todos,
    }
    return render(request, "app/index.html", context)


def create(request, pk):
    pass



def update(request, pk):
    pass


def delete(request, pk):
    pass


def detail(request, pk):
    pass
