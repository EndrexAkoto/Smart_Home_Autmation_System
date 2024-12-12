from django.contrib import admin
from django.urls import path, include
from devices.views import DeviceListView, DeviceControlView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/devices/', DeviceListView.as_view(), name='device-list'),
    path('api/device/<int:device_id>/control/', DeviceControlView.as_view(), name='device-control'),
]
