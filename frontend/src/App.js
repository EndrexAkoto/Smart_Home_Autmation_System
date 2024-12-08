import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import SignInPage from "./components/SignInPage"
import SignUpPage from "./components/SignUpPage" 
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
