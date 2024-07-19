from django.shortcuts import render

def ratiosCedears(request):  
    return render(request, 'utilidades/ratios-cedears.html', {})
                # request, template, contexto
                # el contexto es un diccionario