from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from database.models import Appointment
from database.models import *


# Create your views here.

def index(request):
    return render(request, 'index.html')

def login_register(request):
    return render(request, 'login_register.html')
def user(request):
    return render(request, 'user.html')
def delete_user(request):
    if request.method == 'DELETE':
        user_id = request.GET.get('user_id')
        appointment = get_object_or_404(Appointment, id=user_id)
        appointment.delete()
        return JsonResponse({'status': 'success'})
def create_appointment(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phonenum = request.POST.get('phonenum')
        telephonenum = request.POST.get('telephonenum')
        date = request.POST.get('date')
        appointment_id = request.POST.get('Id') #3shan 7war el app
        if Appointment.objects.filter(Id=appointment_id).exists():
            return JsonResponse({'success': False, 'message': 'An appointment with this ID already exists change the id'})
        # Otherwise, create a new appointment object and save it to the database
        appointment = Appointment(name=name, email=email, phonenum=phonenum,
                                  telephonenum=telephonenum, date=date, Id=appointment_id)
        appointment.save()
        return JsonResponse({'success': True, 'message': 'Appointment created successfully'})
    else:
        return render(request, 'user.html')


def review(request):
    if request.method == "POST":
        form = ReviewForm(request.POST or None)
    else:
        return render (request, 'index.html', {})

  




