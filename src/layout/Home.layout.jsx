import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'

const Homelayout = (Components) => ({...props}) => {
  return (
    <div>
        <Header />
        <Navbar />
        <ImageSlider />
        <Components {...props} />
    </div>
  )
}

export default Homelayout