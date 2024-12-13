import React from "react"
import { Link } from "react-router-dom" // For navigation
import "./LandingPage.css" // Import the LandingPage.css file
import logo from "../images/logo.webp" // Corrected path to the logo
import smartLighting from "../images/Smart Lighting.jpeg"
import homeAutomation from "../images/Home Automation.jpg"
import energySaving from "../images/Energy Saving.png"
import smartSecurity from "../images/Smart Security.avif"
import voiceControl from "../images/voice.png"
import smartThermostats from "../images/Smart Thermostats.webp"

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Smart Home Logo" className="logo-image" />
          <span className="logo-text">Smart Home</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Log In</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Transform Your Home with Smart Tech</h1>
        <p>Automate your home for convenience, security, and energy savings.</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          {/* Feature 1 */}
          <div className="feature-item">
            <img src={smartLighting} alt="Smart Lighting" className="feature-image" />
            <h3>Smart Lighting</h3>
            <p>Control the brightness, color, and ambiance of your home lighting remotely.</p>
          </div>
          {/* Feature 2 */}
          <div className="feature-item">
            <img src={homeAutomation} alt="Home Automation" className="feature-image" />
            <h3>Home Automation</h3>
            <p>Automate your home’s devices to create routines and schedules.</p>
          </div>
          {/* Feature 3 */}
          <div className="feature-item">
            <img src={energySaving} alt="Energy Saving" className="feature-image" />
            <h3>Energy Saving</h3>
            <p>Monitor and reduce energy usage to save on your electricity bills.</p>
          </div>
        </div>
        <div className="feature-list">
          {/* Feature 4 */}
          <div className="feature-item">
            <img src={smartSecurity} alt="Smart Security" className="feature-image" />
            <h3>Smart Security</h3>
            <p>Ensure the safety of your home with real-time security camera feeds and motion sensors.</p>
          </div>
          {/* Feature 5 */}
          <div className="feature-item">
            <img src={voiceControl} alt="Voice Control" className="feature-image" />
            <h3>Voice Control</h3>
            <p>Control all smart devices using voice commands with popular assistants like Alexa or Google Assistant.</p>
          </div>
          {/* Feature 6 */}
          <div className="feature-item">
            <img src={smartThermostats} alt="Smart Thermostats" className="feature-image" />
            <h3>Smart Thermostats</h3>
            <p>Automatically adjust the temperature of your home for comfort and energy savings.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>© 2024 Smart Home Automation, All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default LandingPage