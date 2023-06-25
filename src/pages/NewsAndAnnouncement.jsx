import React from 'react'
import MainLayout from '../layout/Main.layout'
import { Helmet } from 'react-helmet'

const NewsAndAnnouncement = () => {
  return (
    <>
      <Helmet>
        <title>News | Announcement | DFIIE</title>
      </Helmet>
    <div>NewsAndAnnouncement</div>
    </>
  )
}

export default MainLayout(NewsAndAnnouncement)