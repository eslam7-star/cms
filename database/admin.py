from django.contrib import admin
from .models import Client
from .models import Appointment
from .models import Review

# Register your models here.



admin.site.register(Client)
admin.site.register(Appointment)
admin.site.register(Review)