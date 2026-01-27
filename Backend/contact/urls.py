from django.urls import path
from . import views

app_name = 'contact'

urlpatterns = [
    path('send/', views.contact_message_create, name='send_message'),
    path('health/', views.health_check, name='health_check'),
]
