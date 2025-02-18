import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 
      className='text-[50px] font-extrabold mb-16 text-center'
      >
       
      <span className='text-red-600 '>
      Discover Your Next Adventure with AI: <br />
      </span>Peraonalized Itineraries at Your Fingertips</h1>

      <p className='text-xl text-green-500 text-center'>Your Personal trip planner and travel curator, creating custom itineraries to your interests and budget </p>

      <Link to={'/create-trip'}>
      <button>Get Started, It's Free</button>
      </Link>
      </div>
      
      
  )
}

export default Hero
