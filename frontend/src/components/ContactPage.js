import React from "react"
import { Link } from "react-router-dom" // Ensure Link is imported for navigation
import "./ContactPage.css"
import logo from "../images/logo.webp" // Import the logo image

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">Smart Home</span>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <h2>Contact Us</h2>
      <p>If you have any inquiries, feel free to reach out!</p>
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Message:</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Smart Home Automation. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ContactPage
