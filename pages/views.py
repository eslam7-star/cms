from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def login_register(request):
    return render(request, 'login_register.html')

