from django.db import models

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=8)

    def __str__(self):
        return self.name


class Appointment(models.Model):
    name = models.ForeignKey(Client, blank=True, null=True, on_delete=models.CASCADE)
    email = models.EmailField(max_length=200)
    # service = models
    phonenum = models.IntegerField()
    whatsnum = models.IntegerField()
    location = models.TextField()
    message = models.TextField()

    def __str__(self):
        return self.name




class Review(models.Model):
   Review = models.TextField()