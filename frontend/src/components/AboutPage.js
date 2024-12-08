import React from "react"
import { Link } from "react-router-dom"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Navbar should be here */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </nav>

      {/* About Us Content */}
      <h2>About Us</h2>
      <p>
        Welcome to Smart Home Automation! We are dedicated to revolutionizing
        the way you experience and interact with your living space. Our goal is
        to provide cutting-edge solutions for home automation, enabling you to
        have full control over your environment with just a tap of your finger.
      </p>
      <p>
        Our platform integrates various smart devices, including lighting,
        security, temperature control, and more, all in one seamless and user-friendly
        interface. Whether you're looking to enhance comfort, energy efficiency, or
        security in your home, our technology is designed to make life easier and
        more convenient.
      </p>
      <p>
        At Smart Home Automation, we believe that the future of living is smart,
        and we are excited to be part of your journey toward a smarter, safer,
        and more connected home.
      </p>
    </div>
  )
}

export default AboutPage
