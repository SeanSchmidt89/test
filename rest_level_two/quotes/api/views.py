from rest_framework import serializers, generics
from quotes.models import Quote
from quotes.api.permissions import IsAdminUserOrReadOnly
from .serializers import QuoteSerializer



class QuoteListCreateAPIView(generics.ListCreateAPIView):
    queryset = Quote.objects.all().order_by('-id')
    serializer_class = QuoteSerializer
    permission_classes = [IsAdminUserOrReadOnly]


class QuoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    permission_classes = [IsAdminUserOrReadOnly]