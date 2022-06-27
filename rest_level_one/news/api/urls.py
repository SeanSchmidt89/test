from django.urls import path
from news.api.views import ArticleListCreateAPIView, ArticaleDetailAPIView


urlpatterns = [
    #path('articles/', article_list_create_api_view, name='article-list '),
    #path('articles/<int:pk>/', article_detail_api_view, name='article-detail'),
    path('articles/', ArticleListCreateAPIView.as_view(), name='article-list'),
    path('articles/<int:pk>/', ArticaleDetailAPIView.as_view(), name='article-detail'),
]