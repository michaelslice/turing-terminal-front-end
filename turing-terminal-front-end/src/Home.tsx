// Main Component, Defines the Root Component Which is The Project Entry Point
import { useState } from 'react'
import React from 'react'
import App from './App.tsx'
import Navbar from './Components/NavigationBar/Navbar'
import './home.css'
import '/src/Components/NavigationBar/Navbar'

function Home() {

  return (
    <>
      <Navbar />
      <h1>Bringing Finance to Everyone</h1>
      <h2>Introducing Turing, a web-based financial Terminal</h2>
    </>
  )
}

export default Home
