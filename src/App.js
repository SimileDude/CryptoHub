import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Homepage from './components/pages/Homepage/Homepage'
import Portfolio from './components/pages/Portfolio'

function App() {
  return (
    <Layout>
      <div className="coin-app">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
    </Layout>
  )
}

export default App

//https://www.coingecko.com/en/api/documentation
