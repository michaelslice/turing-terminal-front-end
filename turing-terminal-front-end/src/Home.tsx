// Main Component, Defines the Root Component Which is The Project Entry Point
import { useState } from 'react'
import React from 'react'
import App from './App.tsx'
import { Link } from 'react-router-dom'
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
          <Link to={"https://calendly.com/"}>
            <a className='book-demo'>
              Book Demo
            </a>
          </Link>
          <Link to={"/terminal"}>
            <a className='launch-terminal'>
              Launch Terminal
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
