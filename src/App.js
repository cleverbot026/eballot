
// Assets
import './App.css'
import logo from './logo.svg'
import React from 'react'
import { Container, Button, Row, Col, Alert, Accordion, Image, Nav, Navbar } from 'react-bootstrap';

// Data
// import candidates from './components/candidates';

// Components
import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Navigation/>
      <Header/>
      <Main/>
      <Footer/>
  </>
  )
}

export default App;
