from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializer import TodoSerializer

# Create your views here.

def index(request):
    return render(request, 'todo_app/index.html')



@api_view(['GET'])
def todo_list(request):
    response = Response()

    todos = Todo.objects.all()
    todo_serializer = TodoSerializer(todos, many=True)

    response.data = {
        'todos': todo_serializer.data
    }

    return response

@api_view(['POST'])
def create_todo(request):
    print(request.data)

#2:22back end