import React from 'react'
import Navbar from '../Componets/Navbar'
import Banner from '../Componets/Banner';
import Footer from '../Componets/Footer';
import Freebook from '../Componets/Freebook';
const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <div className='mb-10'>
        <Freebook/>
      </div>
      <div className='mt-20'>
        <Footer/>
      </div>
    </>
  )
}

export default Home
