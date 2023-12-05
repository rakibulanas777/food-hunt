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

    </>
  )
}

export default App
