from django.conf.urls import url

from frontend.views import *

urlpatterns = [
	url('^$', index, name="index")
]
