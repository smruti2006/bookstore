import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Login from './Login';
const Navbar = () => {
  const navitems = (<>
    <li><a href='/'>Home</a></li>
    <li><a href='/Courses'>Course</a></li>
    <li><a href='/Contact'>Contact</a></li>
    <li><a href='/About'>About</a></li>
  </>)
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      }
      else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])
  return (
    <>
      <div className=''>
        <div className={`top-0 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed w-full z-50 ${sticky
          ? "sticky-navbar shadow-white-md bg-white-base-100 duration-300 transition-all ease-in-out"
          : ""
          }`}>
          <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">{navitems}</ul>
              </div>
              <a className="btn btn-ghost text-xl font-bold">Book Store</a>
            </div>
            <div className="navbar-end space-x-3">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navitems}
                </ul>
              </div>
              <div className="hidden md:block">
                <label className="input w-60  px-3 py-1">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input
                    type="search"
                    required
                    placeholder="Search"
                    className="border-none outline-none focus:outline-none focus:border-none focus:ring-0"
                  />
                </label>
              </div>
              <div>
                <label className="toggle text-base-content">
                  <input type="checkbox" value="synthwave" className="theme-controller" />

                  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
              </div>
              <div>
                <a className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a>
                <Login/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
