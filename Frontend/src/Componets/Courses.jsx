import React from 'react'
import List from '../list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <>
      <div className='mt-28 justify-center text-center'>
        <div>
          <h1 className='text-3xl' >We are delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
          <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla euismod, nisl sit amet tincidunt tincidunt, nibh nunc aliquam nisl, ut aliquam sapien nulla in libero.
            Curabitur sed turpis ac libero cursus scelerisque.</p>
          <Link to="/">
            <button className='btn btn-secondary mt-6'>Back</button>

          </Link>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-3 mt-10'>
        {
          List.map((item) => {
            return <Cards key={item.id} item={item} />
          })
        }
      </div>
    </>
  )
}

export default Courses
