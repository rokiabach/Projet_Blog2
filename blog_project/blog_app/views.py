from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Utilisateur
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

# Create your views here.

def index(request):
    return render(request, 'index.html', {})

@login_required 
def home(request):
    return render(request, 'home.html', {})

def about(request):
    return render(request, 'about.html', {})

@login_required 
def post(request):
    return render(request, 'post.html', {})

@login_required 
def contact(request):
    return render(request, 'contact.html', {})

def contact2(request):
    return render(request, 'contact2.html', {})

@login_required  # Assure que l'utilisateur est connecté
def profile(request):
    user = request.user  # Récupère l'utilisateur connecté
    context = {
        'user': user,
    }
    return render(request, 'profile.html', context)

def mesBlogs(request):
    return render(request, 'mesBlogs.html', {})


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'inscription.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')  # Redirigez vers la page d'accueil après la connexion
    else:
        form = AuthenticationForm()
    return render(request, 'connexion.html', {'form': form})

@login_required 
def logout_view(request):
    logout(request)
    return redirect('index') 