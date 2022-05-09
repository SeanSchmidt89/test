from django.shortcuts import render
import requests

# Create your views here.

def index(request):
    api_key = '5630a17a3869f6cedeb147809fc2f514'
    api_url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid='+api_key
    api_data = requests.get(api_url)
    api_json = api_data.json()
    context = {}
    return render(request, 'weather_app/index.html')
