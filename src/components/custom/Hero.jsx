import React from 'react'

function Hero() {
  return (
    <div className='bg-gradient-to-r from-accent-light to-accent-dark p-12 rounded-2xl shadow-lg flex flex-col items-center mx-8 gap-4 text-center'>
      <h1 className='text-5xl font-extrabold text-textPrimary mb-4'>
        Discover Your Next Adventure with AI
      </h1>
      <span className='text-primary text-lg'>
        Plan your trips effortlessly with our AI-powered travel planner.
      </span>
      <p className='text-xl text-textSecondary max-w-2xl'> 
        Get personalized recommendations and make the most out of your next journey. Experience smarter travel planning today!
      </p>
      <button className='mt-6 px-8 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-hover hover:shadow-lg transition-transform transform hover:scale-105'>
        Start Planning
      </button>
    </div>
  )
}

export default Hero
