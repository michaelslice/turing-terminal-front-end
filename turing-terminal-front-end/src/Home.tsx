// Main Component, Defines the Root Component Which is The Project Entry Point
import { useState } from 'react'
import React from 'react'
import App from './App.tsx'
import './home.css'

import '/src/Components/NavigationBar/Navbar'

import Navbar from './Components/NavigationBar/Navbar';

function Home() {

  return (
    <>
     <Navbar />
      <div className='home'>
        <div className='large-space'>
        </div>
          <div className='intro-text'>
            <h1>Bringing Finance to Everyone</h1>
            <h2>Introducing Turing, a web-based financial Terminal</h2>
        </div>
        <div className='demo-buttons'>
          <a>
            Book Demo
          </a>
          <a>
            Launch Terminal
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
