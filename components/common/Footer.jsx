import React from 'react'
import Logo from './Logo'
import {  } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer className='mt-60 py-5'>
      <div className='container'>
        <div className='flex justify-between item-center border-b border-[#87C232] pb-5'>
          <Logo />
          <div className='flex item-center space-x-4'>
            <img className='w-[30px]' src="/img/fb.svg" alt="" />
            <img className='w-[30px]' src="/img/in.svg" alt="" />
          </div>
        </div>
        <div className='lg:flex justify-between pt-5 text-center'>
          <p>Copyright © {new Date().getFullYear()} ftf Inc. All rights reserved.</p>
          <div>
            <p>Terms of Use</p>
            <p></p>
            <p></p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer