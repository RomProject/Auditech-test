import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

export default function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      
    <Route path = "*" element={<Navigate to="/login"/>}/>
    <Route   path ="/register" element={<Register/>} />
    <Route path ="/login" element ={<Login/>} />
    <Route path = "/home" element ={<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}
