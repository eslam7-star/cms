from datetime import date, timedelta
from django.core.management.base import BaseCommand
from database.models import Appointment_available_dates

class Command(BaseCommand):
    help = 'Populates the AvailableDate model with sample dates'

    def handle(self, *args, **options):
        # Define the start and end dates for the sample dates
        start_date = date.today()
        end_date = start_date + timedelta(days=30)  # Adjust the range as needed

        # Iterate over the range of dates and create AvailableDate objects
        current_date = start_date
        while current_date <= end_date:
            Appointment_available_dates.objects.create(date=current_date)
            current_date += timedelta(days=1)

        self.stdout.write(self.style.SUCCESS('Sample dates added successfully.'))
