from django.db import models

class Device(models.Model):
    DEVICE_TYPES = [
        ('LIGHT', 'Light'),
        ('TEMP', 'Temperature'),
        ('HUMID', 'Humidity'),
        ('CURTAIN', 'Curtain'),
        ('MOTION', 'Motion Sensor'),
        ('SMOKE', 'Smoke Detector'),
    ]
    name = models.CharField(max_length=100)
    device_type = models.CharField(choices=DEVICE_TYPES, max_length=20)
    status = models.CharField(max_length=20, default='OFF')  # ON/OFF/OPEN/CLOSED
    last_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
