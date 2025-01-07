from django.urls import path
from .views import * # user>views에서 모든 함수를 가져옴
from django.contrib.auth import views as auth_views

app_name = "users"
urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
]