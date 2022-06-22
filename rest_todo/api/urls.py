from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('task_list/', views.taskList, name='task-list'),
    path('task_detail/<int:pk>/', views.taskDetail, name='task-detial'),
]




