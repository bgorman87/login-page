from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
def index(request, *args, **kwargs):
    if request.user.is_authenticated:
        return render(request, 'index.html',)
    return redirect('/login')

def login(request):
    return render(request, 'index.html',)