import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen '>
                <div className="h-120 w-100 border-1 p-5 rounded-2xl"
                    style={{ boxShadow: '0 4px 20px rgba(251, 191, 36, 0.5)' }}>
                    <div>
                        <form onSubmit={handlesubmit(onSubmit)}>
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h1 className='text-2xl'>Contact US</h1>
                            <label className='mt-5 block text-1xl'>Name</label>
                            <input type='text' placeholder='Enter Your Name' className='rounded border-1 mt-2 w-90 p-1.5'></input>
                            <label className='mt-5 block text-1xl'>Email</label>
                            <input type='email' placeholder='Enter Your Email' className='rounded border-1 mt-2 w-90 p-1.5'></input>
                            <label className='mt-5 block text-1xl'>Message</label>
                            <input type='email' placeholder='Enter Your Message' className='px-1.5 rounded border-1 mt-2 h-30 w-90'></input>
                            <a type="submit" className="bg-pink-500 mt-3 text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer btn">Submit</a>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
