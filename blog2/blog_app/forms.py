from .models import *
from django import forms
from django.forms import ModelForm

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('user', 'title', 'body',)

        widgets = {
            'user': forms.TextInput(attrs={'id': 'user', 'type': 'hidden'}),
            'title': forms.TextInput(),
            'body': forms.TextInput(),
        }

class PostUpdate(forms.ModelForm):
    class Meta:
        model = Post

        fields = ('user', 'title', 'body',)

        widgets = {
            'user': forms.TextInput(attrs={'id': 'user', 'type': 'hidden'}),
            'title': forms.TextInput(),
            'body': forms.TextInput(),
        }