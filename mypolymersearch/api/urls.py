from django.urls import path
from .views import PolymerSearchView

urlpatterns = [
    path('search/', PolymerSearchView.as_view(), name='polymer_search'),
]
