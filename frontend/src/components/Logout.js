// src/components/Logout.js
import React from 'react'
import './Logout.css'

const Logout = () => {
  const handleLogout = () => {
    // Clear user session, for example by removing the JWT token
    localStorage.removeItem('token') // Example, adjust according to your auth method
    window.location.href = '/login'  // Redirect user to login page
  }

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <div className="logout-actions">
        <button className="logout-btn" onClick={handleLogout}>
          Yes, Log out
        </button>
        <button className="cancel-btn" onClick={() => window.history.back()}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Logout
