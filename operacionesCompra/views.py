from django.shortcuts import render

def comprasBonos(request):  
    return render(request, 'operacionesCompra/compras-bonos.html', {})
                # request, template, contexto
                # el contexto es un diccionario