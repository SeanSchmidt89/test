from quotes.models import Quote
from rest_framework import serializers, generics
from .serializers import QuoteSerializer

class QuoteListCreateAPIView(generics.ListCreateAPIView):
    queryset = Quote.objects.all().order_by('-id')
    serializer_class = QuoteSerializer


class QuoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quote.objects.all().order_by('-id')
    serializer_class = QuoteSerializer