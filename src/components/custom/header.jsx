import React from 'react'


import { Button } from '../ui/button'
function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 background bg-white h-20 ml-0'>
        <img src="/logo.png" alt="logo" className="h-20 w-20 ml-0 pl-0" />
      <div>
        <Button className="bg-blue-700">Sign In</Button>
      </div>
    </div>
  )
}

export default Header
