from django.urls import path, include

from product import views

urlpatterns = [
    path('lastest-prodcuts/', views.LastestProductsList.as_view()),
]

