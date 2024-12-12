#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";
const char* serverUrl = "http://<Django-Server-IP>/api/device/";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  sendDeviceStatus("1", "ON");
  delay(5000); // Send every 5 seconds for testing
}

void sendDeviceStatus(String deviceId, String status) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl + deviceId + "/control/");
    http.addHeader("Content-Type", "application/json");

    String requestBody = "{\"action\": \"" + status + "\"}";
    int httpResponseCode = http.POST(requestBody);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(response);
    } else {
      Serial.println("Error in HTTP request");
    }
    http.end();
  } else {
    Serial.println("WiFi not connected");
  }
}
