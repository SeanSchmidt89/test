from django.urls import path
from jobs.api.views import *

urlpatterns = [
    path('jobs/', jobs_list, name='jobs'),
    path('jobs/<int:pk>/', JobsDetail.as_view(), name='jobs-detail')
]