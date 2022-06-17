import re
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

    print(request.data)

#2:22back end