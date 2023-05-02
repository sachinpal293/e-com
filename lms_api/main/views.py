from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from . import models
from rest_framework.response import Response
# Create your views here.
# class TeacherList(APIView):
    # def get(self,request):
        # teachers = models.Teacher.objects.all()
        # serializer = TeacherSerializer(teachers,many=True)
        # return Response(serializer.data)
# 

# Through Genric Class
class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    permissions_classes = [IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    permissions_classes = [IsAuthenticated]