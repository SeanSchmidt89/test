from django.urls import path
from ebooks.api.views import EbookListCreateAPIView, EbookDetailAPIView, ReviewCreateAPIView, ReviewDetialAPIView

urlpatterns = [
    path('ebooks/', EbookListCreateAPIView.as_view(), name='ebook-list'),
    path('ebooks/<int:pk>/', EbookDetailAPIView.as_view(), name='ebook-detail'),
    path('ebooks/<int:ebook_pk>/review/', ReviewCreateAPIView.as_view(), name='ebook-review'),
    path('review/<int:pk>/', ReviewDetialAPIView.as_view(), name='review-detail'),
]