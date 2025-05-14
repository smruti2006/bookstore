import React from 'react'
import Book from "../book.png"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:order-2 my-2">
        <div className='w-full md:w-1/2 mt-7 md:mt-25 space-y-12 order-2 md:order-1'>
          <h1 className='text-4xl font-bold'>Hellow,Welcomes here to learn Something <span className='text-pink-500'>New Everyday!!!</span></h1>
          <p className='text-xl'>The golden cat jumped over seven sleepy turtles as the moonlight flickered through the rustling bamboo forest. Meanwhile, an old radio hummed forgotten tunes in a dusty attic where nobody had been in years.</p>
          <label className="input validator w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button className="btn btn-secondary">Secondary</button>
        </div>
        <div className='w-full md:w-1/2 order-1'>
          <img src={Book} alt='Book Pic' className='md:ml-35 mt-20'></img>
        </div>
      </div>
    </>
  )
}

export default Banner
