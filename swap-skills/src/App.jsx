import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Explore from './components/Explore'
import Chat from './components/Chat'
import VideoCall from './components/VideoCall'
import Profile from './components/Profile'
import { AuthProvider } from './context/AuthContext'


function App() {
return (
<AuthProvider>
<div className="d-flex flex-column min-vh-100 app-root">
<Header />
<main className="flex-grow-1">
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/explore" element={<Explore />} />
<Route path="/chat/:id" element={<Chat />} />
<Route path="/call/:id" element={<VideoCall />} />
<Route path="/profile/:id" element={<Profile />} />
</Routes>
</main>
<Footer />
</div>
</AuthProvider>
)
}


export default App