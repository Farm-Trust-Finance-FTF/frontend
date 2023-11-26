import React from 'react'
import Logo from './Logo'
import ConnectWallet from './ConnectWallet'

function Navbar() {
  return (
    <nav className='hidden container text-[#141414] mt-5 lg:flex justify-between items-center'>
      <Logo />
      <div className='flex space-x-5 cursor-pointer font-bold'>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <ConnectWallet />
    </nav>
  )
}

export default Navbar