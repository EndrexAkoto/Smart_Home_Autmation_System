// src/components/AdminPanel.js
import React, { useState } from 'react'
import './AdminPanel.css'

const AdminPanel = () => {
  console.log('Admin Panel Loaded')
  const [activeTab, setActiveTab] = useState('dashboard')
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <div className="tab-content">Dashboard Content</div>
      case 'devices':
        return <div className="tab-content">Manage Devices Content</div>
      case 'users':
        return <div className="tab-content">Manage Users Content</div>
      case 'alerts':
        return <div className="tab-content">Alerts Content</div>
      case 'settings':
        return <div className="tab-content">Settings Content</div>
      default:
        return <div className="tab-content">Dashboard Content</div>
    }
  }

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="logo-placeholder">LOGO</div>
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
        </ul>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className="notifications">🔔 Notifications</div>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}

export default AdminPanel
