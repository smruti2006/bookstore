import React from 'react'
import Navbar from '../Componets/Navbar'
import Footer from '../Componets/Footer'
import Courses from '../Componets/Courses'

const Course = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen ml-10'>
        <Courses />
    </div>
    <div className='mt-10'>
      <Footer />
    </div>
    </>
  )
}

export default Course
