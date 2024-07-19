from django.urls import path
from utilidades import views

urlpatterns = [
    path('utilidades/ratios-cedears/', views.ratiosCedears),
]
