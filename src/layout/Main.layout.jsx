import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const MainLayout = (Components) => ({...props}) => {
  return (
    <div className='h-screen flex flex-col'>
        <Header />
        <Navbar />
        <Components {...props} />
    </div>
  )
}

export default MainLayout;