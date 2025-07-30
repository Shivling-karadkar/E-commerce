from django.urls import path
from api.views import *
# from .views import MsgView
from .views import RegisterUser, LoginUser

urlpatterns = [
    path('signup/', RegisterUser.as_view(),name='signup'),
    path('login/', LoginUser.as_view(),name='login'),
]
