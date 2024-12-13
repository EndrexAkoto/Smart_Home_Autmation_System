// src/components/AdminPanel.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'  // Import useNavigate for redirection
import './AdminPanel.css'
import logo from '../images/logo.webp' // Ensure logo path is correct

const AdminPanel = () => {
  const navigate = useNavigate() // Hook for navigation
  const [activeTab, setActiveTab] = useState('dashboard')
  const [devices] = useState([
    { id: 1, name: 'Device 1', status: 'Active', user: 'John Doe' },
    { id: 2, name: 'Device 2', status: 'Inactive', user: 'Jane Smith' },
    { id: 3, name: 'Device 3', status: 'Active', user: 'Alice Johnson' },
  ])
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  ])
  const [alerts, setAlerts] = useState([])
  const currentUser = { name: 'Admin', email: 'admin@example.com' } // Logged-in admin

  // Handle logout
  const handleLogout = () => {
  // Clear session data (e.g., remove token from localStorage)
  localStorage.removeItem('authToken') // or any other relevant data
  
  // Redirect to Landing Page after logout
  navigate('../components/LandingPage.js') // This will navigate to the LandingPage
}

  // Rendering content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="tab-content">
            <h2>Dashboard</h2>
            <div className="dashboard-stats">
              <div className="stat">
                <h4>Number of Devices</h4>
                <p>{devices.length}</p>
              </div>
              <div className="stat">
                <h4>Number of Users</h4>
                <p>{users.length}</p>
              </div>
              <div className="stat">
                <h4>Device Status</h4>
                <ul>
                  {devices.map(device => (
                    <li key={device.id}>
                      {device.name}: {device.status}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      case 'devices':
        return (
          <div className="tab-content">
            <h2>Manage Devices</h2>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Device</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map(device => (
                  <tr key={device.id}>
                    <td>{device.user}</td>
                    <td>{device.name}</td>
                    <td>{device.status}</td>
                    <td>
                      <button onClick={() => alert(`Adjusting ${device.name}`)}>Adjust</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'users':
        return (
          <div className="tab-content">
            <h2>Manage Users</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'alerts':
        return (
          <div className="tab-content">
            <h2>Alerts</h2>
            {alerts.length === 0 ? (
              <p>No alerts at the moment.</p>
            ) : (
              alerts.map((alert, index) => (
                <div key={index} className={`alert ${alert.type}`}>
                  {alert.message}
                </div>
              ))
            )}
          </div>
        )
      case 'settings':
        return (
          <div className="tab-content">
            <h2>Settings</h2>
            <p>Settings content goes here.</p>
          </div>
        )
      case 'statistics':
        return (
          <div className="tab-content">
            <h2>Statistics</h2>
            <div className="statistics-graph">
              <p>Graph for Device 1</p>
              <p>Graph for Device 2</p>
              <p>Graph for Device 3</p>
            </div>
          </div>
        )
      default:
        return <div className="tab-content">Dashboard Content</div>
    }
  }

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="user-info">
          <div className="profile-pic">
            <img src="profile-pic-placeholder.jpg" alt="Profile" />
          </div>
          <div className="user-details">
            <p>{currentUser.name}</p>
            <p>{currentUser.email}</p>
            <p>Admin</p>
          </div>
        </div>
        <ul>
          <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
            Dashboard
          </li>
          <li className={activeTab === 'devices' ? 'active' : ''} onClick={() => setActiveTab('devices')}>
            Manage Devices
          </li>
          <li className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>
            Manage Users
          </li>
          <li className={activeTab === 'alerts' ? 'active' : ''} onClick={() => setActiveTab('alerts')}>
            Alerts
          </li>
          <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            Settings
          </li>
          <li className={activeTab === 'statistics' ? 'active' : ''} onClick={() => setActiveTab('statistics')}>
            Statistics
          </li>
          {/* Logout Button */}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className="notifications">🔔 Notifications</div>
        </div>
        {renderContent()}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Smart Home Automation System. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default AdminPanel
