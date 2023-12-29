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
import FoodPage from './pages/FoodPage'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import ApplyRestourant from './pages/ApplyRestourant'
import ApplyRestourantPayment from './pages/ApplyRestourantPayment'
import VerifyOtp from './pages/VerifyOtp'
import Myrestourant from './pages/Myrestourant'
import Allrestaurant from './pages/admin/Allrestaurant'

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
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
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/verifyotp"
          element={
            <ProtectedRoute>
              <VerifyOtp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myrestourant/:ownerId"
          element={
            <ProtectedRoute>
              <Myrestourant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/allrestourant/:ownerId"
          element={
            <ProtectedRoute>
              <Allrestaurant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/apply-restourant"
          element={
            <ProtectedRoute>
              <ApplyRestourant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply-restourant-payment"
          element={
            <ProtectedRoute>
              <ApplyRestourantPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/food-details"
          element={
            <FoodPage />
          }
        />
        <Route
          path="/addfood"
          element={
            <FoodPage />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
