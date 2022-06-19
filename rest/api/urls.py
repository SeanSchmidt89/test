from django.urls import path

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
]