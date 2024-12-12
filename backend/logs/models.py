from django.db import models
from devices.models import Device

class Log(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    action = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.device.name} - {self.action}'
