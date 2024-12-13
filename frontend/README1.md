Smart Home Automation System

Overview

This project is a Smart Home Automation System that integrates various IoT sensors and actuators with a web-based control interface. The system provides functionalities for smoke detection, motion sensing, door and window control, RGB light control, password-protected access, and smart thermostat capabilities.

Features

Smoke Detection: Alerts the user when smoke is detected using the smoke sensor (MQ2).

Motion Detection: Detects motion using a PIR sensor and triggers appropriate actions.

Door and Window Control: Servo motor-powered automation for opening and closing doors/windows.

RGB Light Control: Adjust the color and brightness of RGB lights from the web interface.

Password-Protected Access: Keypad-based entry for secure access.

Smart Thermostat: Monitors and controls room temperature based on user preferences.

Web Interface: A user-friendly website to monitor and control all functionalities remotely.

Components Used

Smoke Sensor (MQ2): For detecting smoke and alerting users.

PIR Motion Sensor: For detecting motion in the room.

Servo Motor: For door and window automation.

RGB LED Lights: For adjustable lighting.

Keypad: For entering a password to secure access.

DHT22 Sensor: For temperature and humidity measurement.

ESP32 Microcontroller: Acts as the central hub, hosting the web interface and controlling components.

How It Works

The ESP32 hosts a web server that allows users to interact with the system via a browser.

Sensors continuously monitor environmental conditions and send data to the ESP32.

The user can:

View real-time sensor data (e.g., temperature, humidity, smoke levels).

Open/close doors and windows via servo motors.

Control RGB lights by selecting colors and brightness.

Secure access to specific functionalities using a keypad and password.

The smart thermostat adjusts temperature settings automatically based on user-defined thresholds.

Installation

Clone the repository:

git clone https://github.com/EndrexAkoto/Smart_Home_Autmation_System

Open the project in your preferred IDE (e.g., Arduino IDE or PlatformIO).

Install the required libraries:

ESPAsyncWebServer

AsyncTCP

Adafruit GFX

Adafruit SSD1306

DHT sensor library

Configure your Wi-Fi credentials in the setup() function of the code:

const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

Upload the code to the ESP32.

Access the web interface by entering the ESP32's IP address in a browser.

Usage

Open the web interface in a browser.

View live data from the sensors on the dashboard.

Control:

Doors/windows using the toggle button.

RGB lights using the color picker.

Temperature settings via the smart thermostat section.

Use the keypad to input the password for secure access to restricted features.

Dependencies

Hardware:

ESP32

Sensors: MQ2, PIR, DHT22

Servo motor

RGB LED

Keypad

Software:

Arduino IDE or PlatformIO

Required libraries (listed in Installation)

Future Improvements

Integration with voice assistants (e.g., Alexa, Google Assistant).

Addition of a mobile app for remote control.

Enhanced security features like biometric access.

Energy consumption monitoring.

License

This project is licensed under the MIT License.

Author

Tech Titans

Acknowledgments

Special thanks to the open-source community for providing libraries and resources that made this project possible.

