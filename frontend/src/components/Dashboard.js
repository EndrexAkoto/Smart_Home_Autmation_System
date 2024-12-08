import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Dashboard.css"

const Dashboard = () => {
  const [temperature, setTemperature] = useState(22) // Thermostat temperature state
  const [lightsStatus, setLightsStatus] = useState("Off")
  const [motionDetected, setMotionDetected] = useState(false)
  const [buzzerStatus, setBuzzerStatus] = useState("Off")
  const [curtainStatus, setCurtainStatus] = useState("Closed")
  const [doorLockStatus, setDoorLockStatus] = useState("Locked")
  const [smokeSensorStatus, setSmokeSensorStatus] = useState("No Smoke")
  const [rgbBrightness, setRgbBrightness] = useState(50) // RGB light brightness
  const [keypadUsage, setKeypadUsage] = useState(false) // Keypad status
  const [notifications, setNotifications] = useState([
    "New update available for security cameras",
    "Smart light firmware update completed",
  ])
  const [unreadCount, setUnreadCount] = useState(notifications.length)
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/50")

  const [dropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleDeviceAction = (device, action) => {
    console.log(`${device} ${action}`)
    if (action === "Turn On") setLightsStatus("On")
    if (action === "Turn Off") setLightsStatus("Off")
    if (action === "Activate") setMotionDetected(true)
    if (action === "Deactivate") setMotionDetected(false)
    setNotifications([
      ...notifications,
      `${device} ${action} at ${new Date().toLocaleTimeString()}`,
    ])
    setUnreadCount(unreadCount + 1)
  }

  const handleTemperatureChange = (action) => {
    if (action === "increase" && temperature < 30) {
      setTemperature(temperature + 1)
    } else if (action === "decrease" && temperature > 16) {
      setTemperature(temperature - 1)
    }
  }

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePic(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLightsControl = () => {
    if (lightsStatus === "Off") {
      setLightsStatus("On")
    } else if (motionDetected) {
      setLightsStatus("Dim")
    } else {
      setLightsStatus("Bright")
    }
  }

  const readNotification = (index) => {
    let newNotifications = [...notifications]
    newNotifications[index] = `[Read] ${newNotifications[index]}`
    setNotifications(newNotifications)
    setUnreadCount(unreadCount - 1)
  }

  return (
    <div className="dashboard">
      {/* Navbar with profile and notifications */}
      <div className="navbar">
        <div className="profile-notifications">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            id="uploadProfilePic"
            style={{ display: "none" }}
          />
          <label htmlFor="uploadProfilePic">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
              onClick={toggleDropdown}
            />
          </label>
          <div className="notifications">
            <button className="notif-btn" onClick={toggleDropdown}>
              🔔 {unreadCount > 0 && <span className="notif-count">{unreadCount}</span>}
            </button>
            {dropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/logout">Log Out</Link></li>
                  <li>
                    <h4>Notifications</h4>
                    {notifications.map((notification, index) => (
                      <div key={index}>
                        <span>{notification}</span>
                        {!notification.startsWith("[Read]") && (
                          <button onClick={() => readNotification(index)}>Mark as Read</button>
                        )}
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <h2>User Dashboard</h2>

      {/* Manage Your Devices */}
      <div className="device-section">
        <h3>Manage Your Devices</h3>
        <div className="devices">
          <div className="device">
            <h4>Smart Light</h4>
            <button className="btn" onClick={() => handleDeviceAction("Smart Light", "Turn On")}>Turn On</button>
            <button className="btn" onClick={() => handleDeviceAction("Smart Light", "Turn Off")}>Turn Off</button>
          </div>
          <div className="device">
            <h4>Smart Thermostat</h4>
            <div className="temperature-control">
              <button className="btn" onClick={() => handleTemperatureChange("increase")}>Increase Temp</button>
              <p>{temperature}°C</p>
              <button className="btn" onClick={() => handleTemperatureChange("decrease")}>Decrease Temp</button>
            </div>
          </div>
          <div className="device">
            <h4>Smoke Sensor (Q2)</h4>
            <p>Status: {smokeSensorStatus}</p>
          </div>
          <div className="device">
            <h4>Servo Motor (Curtain and Door)</h4>
            <p>Curtain: {curtainStatus}</p>
            <p>Door: {doorLockStatus}</p>
            <button className="btn" onClick={() => handleDeviceAction("Servo Motor", "Open Curtain")}>Open Curtain</button>
            <button className="btn" onClick={() => handleDeviceAction("Servo Motor", "Close Curtain")}>Close Curtain</button>
            <button className="btn" onClick={() => handleDeviceAction("Servo Motor", "Lock Door")}>Lock Door</button>
            <button className="btn" onClick={() => handleDeviceAction("Servo Motor", "Unlock Door")}>Unlock Door</button>
          </div>
          <div className="device">
            <h4>Motion Sensor</h4>
            <button className="btn" onClick={() => handleDeviceAction("Motion Sensor", "Activate")}>Activate</button>
            <button className="btn" onClick={() => handleDeviceAction("Motion Sensor", "Deactivate")}>Deactivate</button>
          </div>
          <div className="device">
            <h4>Buzzer</h4>
            <button className="btn" onClick={() => handleDeviceAction("Buzzer", "Turn On")}>Turn On</button>
            <button className="btn" onClick={() => handleDeviceAction("Buzzer", "Turn Off")}>Turn Off</button>
          </div>
          <div className="device">
            <h4>RGB Light Control</h4>
            <button className="btn" onClick={handleLightsControl}>Toggle Lights</button>
            <button className="btn" onClick={() => setRgbBrightness(rgbBrightness + 10)}>Increase Brightness</button>
            <button className="btn" onClick={() => setRgbBrightness(rgbBrightness - 10)}>Decrease Brightness</button>
            <p>Brightness: {rgbBrightness}%</p>
          </div>
          <div className="device">
            <h4>Keypad</h4>
            <button className="btn" onClick={() => setKeypadUsage(true)}>Use Keypad</button>
            <p>Status: {keypadUsage ? "In Use" : "Idle"}</p>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="system-status">
        <h3>System Status</h3>
        <ul>
          <li>Lights: {lightsStatus}</li>
          <li>Thermostat: {temperature}°C</li>
          <li>Motion Detected: {motionDetected ? "Yes" : "No"}</li>
          <li>Smoke Sensor: {smokeSensorStatus}</li>
          <li>RGB Lights Brightness: {rgbBrightness}%</li>
          <li>Keypad: {keypadUsage ? "In Use" : "Idle"}</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
