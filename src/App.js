import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Homepage from './components/pages/Homepage/Homepage'
import About from './components/pages/About/About'

function App() {
  return (
    <Layout>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Layout>
  )
}

export default App
