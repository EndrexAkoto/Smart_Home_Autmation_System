import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./SignUpPage.css" // Make sure this is linked to the correct CSS file
import logo from "../images/logo.webp" // Ensure the logo path is correct

const SignInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add sign-in logic here (e.g., call an API)
    console.log("Sign In: ", { email, password })
  }

  return (
    <div className="sign-in-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-container">
          <img
            src={logo} // Use the imported logo variable
            alt="Logo"
            className="logo"
          />
          <span className="logo-text">Smart Home</span>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Log In</Link></li>
        </ul>
      </div>

      {/* Sign In Form */}
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Smart Home Automation. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default SignInPage
