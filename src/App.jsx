
import React, { useState } from 'react'
import "./assets/css/style.css"
import Navbar from './componnets/Navbar'
import Home from './componnets/Home'
import About from './componnets/About'
import Menu from './componnets/Menu'
import Product from './componnets/Product'
import Review from './componnets/Review'
import Contact from './componnets/Contact'
import Blog from './componnets/Blog'
import Footer from './componnets/Footer'

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
      ama
    </>
  )
}

export default App