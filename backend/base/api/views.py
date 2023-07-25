from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializer import UserSerializer, SellerSerializer
from rest_framework.views import APIView
from ..models import User, Seller
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework.generics import ListCreateAPIView
from rest_framework import generics


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        token['is_admin'] = user.is_superuser
    
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]
    return Response(routes)

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('serializer',serializer.data)
        return Response(serializer.data)

@api_view(['GET'])
def userList(request):
    
    users = User.objects.filter(is_superuser=False)
    serializer = UserSerializer(users, many=True)
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['id']
    return Response(serializer.data)

@api_view(['GET'])
def userDetails(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def userUpdate(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=request.data)
    print(request.data)
    # print(serializer)
    if serializer.is_valid():
        serializer.save()
        print('updated',serializer.data)
    return Response(serializer.data)


@api_view(['DELETE'])
def userDelete(request, pk):
    user = User.objects.get(id=pk)
    user.delete()

    return Response('User deleted')


class classUserList(ListCreateAPIView):
    queryset = User.objects.filter(is_superuser=False)
    serializer_class = UserSerializer
    filter_backends = [SearchFilter]
    search_fields = ['username', 'email']



class userDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.filter(is_superuser=False)
    serializer_class = UserSerializer


#Seller Details

class SellerRegisterView(APIView):
    def post(self, request):
        serializer = SellerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('serializer',serializer.data)
        return Response(serializer.data)
    
class classSellerList(ListCreateAPIView):
    queryset = Seller.objects.filter(is_superuser=False)
    serializer_class = SellerSerializer
    filter_backends = [SearchFilter]
    search_fields = ['first_name', 'email','last_name']


@api_view(['POST'])
def sellerUpdate(request, pk):
    try:
        seller = Seller.objects.get(id=pk)
    except Seller.DoesNotExist:
        return Response(status=404)

    serializer = SellerSerializer(instance=seller, data=request.data)
    if serializer.is_valid():
        serializer.save(is_active=True)
        print('updated',serializer.data)
    return Response(serializer.errors, status=400)

