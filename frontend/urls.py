from django.urls import path, re_path
from .views import index, login

urlpatterns = [
    path("", index),
    path("login/", login)
]
