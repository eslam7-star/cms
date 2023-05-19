from django.urls import path
from . import views
from pages.views import delete_user,create_appointment

urlpatterns = [

    path('', views.index, name='index'),
    path('login_register/', views.login_register, name='login'),
    path('user', views.user, name='user' ),
    path('create-appointment/', create_appointment, name='create_appointment'),
    

]