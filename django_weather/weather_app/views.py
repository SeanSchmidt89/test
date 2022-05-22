from django.shortcuts import render
import requests
import datetime

# Create your views here.

def index(request):
    if 'city' in request.POST:
        city = request.POST['city']

    else:
        city = 'eugene'
    api_key = '5630a17a3869f6cedeb147809fc2f514'
    api_url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+api_key
    api_data = requests.get(api_url)
    api_json = api_data.json()
    descrition = api_json['weather'][0]['description']
    temp = api_json['main']['temp']
    temp = (temp - 273.15) * 9/5 + 32
    temp = f"{round(temp, 2)} ℉"
    humidity = api_json['main']['humidity']
    wind = api_json['wind']['speed']
    icon = api_json['weather'][0]['icon']
    day = datetime.date.today()
    context = {
        'descrition': descrition.title(),
        'temp': temp,
        'humidity': humidity,
        'wind': wind,
        'icon': icon,
        'day': day,
        'city': city.title(),
    }
    return render(request, 'weather_app/index.html', context)