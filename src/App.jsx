import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/LogIn'
import Register from './pages/Register'
import RecommendateFoods from './components/RecommendateFoods'
import Menu from './pages/Menu'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu />
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/register"
          element={
            <Register />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
