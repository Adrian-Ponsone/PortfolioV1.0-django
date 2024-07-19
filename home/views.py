from django.shortcuts import render

def index(request):  
    return render(request, 'home/index.html', {})
                # request, template, contexto
                # el contexto es un diccionario