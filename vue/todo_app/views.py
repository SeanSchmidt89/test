import re
from django.shortcuts import render, get_object_or_404
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
    response = Response()

    #extract new todo from request data
    new_todo_text = request.data.get('new_todo_text')

    #instantiate Todoserializer with text from the request
    todo_serializer = TodoSerializer(data={'text': new_todo_text})

    #if serializer fields are valid
    if todo_serializer.is_valid():
        #create a new todo object in our backend DB
        todo_serializer.save()
    
    #get all todos from DB
    todos = Todo.objects.all()

    #serialize objects
    todo_serializer = TodoSerializer(todos, many=True)

    #attach todo data to response object
    response.data={
        'todos': todo_serializer.data
    }

    return response


@api_view(['POST'])
def toggle_complete(request, todo_id):
    response = Response()
    print(todo_id)

    #pass the TodoItem class where the class id = id passed in view
    todo = get_object_or_404(Todo, id=todo_id )

    #flip the completed value
    todo.completed = not todo.completed
    todo.save()

    #get all the todos from DB

    todos = Todo.objects.all()

    #serialize all objects
    todo_serializer = TodoSerializer(todos, many=True)

    response.data = {
        'todos': todo_serializer.data
    }
    return response


@api_view(['POST'])
def delete_todo(request, todo_id):
    response = Response()

    todo = get_object_or_404(Todo, id=todo_id)

    todo.delete()

    todos = Todo.objects.all()

    todo_serializer = TodoSerializer(todos, many=True)

    response.data = {
        'todos': todo_serializer.data
    }

    return response
     


#19:00 back end