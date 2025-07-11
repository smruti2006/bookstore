import React from 'react'
import { useAuth } from '../Context/authprovider'

const Logout = () => {
    const[authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                User:null
            })
            localStorage.removeItem("User")
            alert("Logout Successfully")
            window.location.reload()
        } catch (error) {
            alert(error)
        }
    }
  return (
    <>
    <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
    onClick={handleLogout}
    >Logout</button>
    </>
  )
}

export default Logout
