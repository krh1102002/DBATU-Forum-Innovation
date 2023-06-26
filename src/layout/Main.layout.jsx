import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = (Components) => ({...props}) => {
  return (
    <div className='flex flex-col h-full overflow-x-hidden'>
        <Header />
        <Navbar />
        <main>
          <Components {...props} />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout;