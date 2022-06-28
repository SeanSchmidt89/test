from django.urls import path
from news.api.views import ArticleListCreateAPIView, ArticaleDetailAPIView, JournalistListCreateAPIView


urlpatterns = [
    path('articles/', ArticleListCreateAPIView.as_view(), name='article-list'),
    path('articles/<int:pk>/', ArticaleDetailAPIView.as_view(), name='article-detail'),
    path('journalist/', JournalistListCreateAPIView.as_view(), name='journalist-list'),
]