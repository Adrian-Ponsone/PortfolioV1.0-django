from django.db import models

class CompraBonos(models.Model):
    fecha = models.DateField()
    horizonte = models.CharField(max_length=30)
    broker = models.CharField(max_length=20)
    ticker = models.CharField(max_length=10)
    percio100n = models.FloatField()
    cantidad = models.IntegerField()
    tircompra = models.FloatField()
    comision = models.FloatField()
    valororden = models.FloatField()
    valormep = models.FloatField()
    preciooperadousd = models.FloatField()
    comisionusd = models.FloatField()
    valorordenusd = models.FloatField()
