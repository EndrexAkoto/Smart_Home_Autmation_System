import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeviceDashboard = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = async () => {
        try {
            const response = await axios.get('/api/devices/');
            setDevices(response.data);
        } catch (error) {
            console.error("Error fetching devices:", error);
        }
    };

    const controlDevice = async (deviceId, action) => {
        try {
            const response = await axios.post(`/api/device/${deviceId}/control/`, { action });
            alert(response.data.message);
            fetchDevices(); // Refresh device statuses
        } catch (error) {
            console.error("Error controlling the device:", error);
        }
    };

    return (
        <div>
            <h1>Smart Home Dashboard</h1>
            <ul>
                {devices.map(device => (
                    <li key={device.id}>
                        {device.name} ({device.device_type}) - {device.status}
                        <button onClick={() => controlDevice(device.id, 'ON')}>Turn On</button>
                        <button onClick={() => controlDevice(device.id, 'OFF')}>Turn Off</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeviceDashboard;
