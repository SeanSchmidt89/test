
from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from jobs.models import Jobs
from .serializers import JobsSerializer
from rest_framework.views import APIView
from rest_framework import status

@api_view(['GET', 'POST'])
def jobs_list(request):
    if request.method == 'GET':
        jobs = Jobs.objects.all()
        serializers = JobsSerializer(jobs, many=True)
        return Response(serializers.data)


class JobsDetail(APIView):
    def get_object(self, pk):
        try:
            return Jobs.objects.get(id=pk)
        except Jobs.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        jobs = self.get_object(pk)
        serializer = JobsSerializer(jobs)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        jobs = self.get_object(pk)
        serializer = JobsSerializer(jobs, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        job = self.get_object(pk)
        job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)









