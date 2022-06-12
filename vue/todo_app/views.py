from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'todo_app/index.html')


#39:00 - 43:00 back end