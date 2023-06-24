import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'

const Homelayout = (Components) => ({...props}) => {
  return (
    <div>
        <Header />
        <Navbar />
        <ImageSlider />
        <Components {...props} />
        <Footer />
    </div>
  )
}

export default Homelayout