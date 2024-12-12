from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Device
from logs.models import Log

class DeviceListView(APIView):
    def get(self, request):
        devices = Device.objects.all()
        data = [{'id': d.id, 'name': d.name, 'status': d.status, 'device_type': d.device_type} for d in devices]
        return Response(data)

class DeviceControlView(APIView):
    def post(self, request, device_id):
        try:
            device = Device.objects.get(id=device_id)
            action = request.data.get('action')  # e.g., 'ON', 'OFF', 'OPEN', 'CLOSE'
            device.status = action
            device.save()
            
            # Log the action
            Log.objects.create(device=device, action=action)
            
            return Response({'message': f'Device {device.name} set to {action}'}, status=status.HTTP_200_OK)
        except Device.DoesNotExist:
            return Response({'error': 'Device not found'}, status=status.HTTP_404_NOT_FOUND)
