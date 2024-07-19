from django.urls import path
from operacionesCompra import views

urlpatterns = [
    path('operacionesCompra/compras-bonos/', views.comprasBonos),
]
