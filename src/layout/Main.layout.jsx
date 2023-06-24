import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = (Components) => ({...props}) => {
  return (
    <div className='h-screen flex flex-col overflow-x-hidden'>
        <Header />
        <Navbar />
        <Components {...props} />
        <Footer />
    </div>
  )
}

export default MainLayout;