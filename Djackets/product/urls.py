from django.urls import path, include

from product import views

urlpatterns = [
    path('latest-prodcuts/', views.LastestProductsList.as_view()),
]

