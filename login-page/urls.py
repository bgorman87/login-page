from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('login-admin-page/', admin.site.urls),
    path('api/', include('users.api.urls')),
]
