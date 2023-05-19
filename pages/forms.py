from django import forms
from database.models import Review 

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['review' , 'rate']
