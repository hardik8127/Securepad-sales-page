import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="w-full flex py-2 px justify-between items-center  bg-gradient-radial from-newgreen opacity-20">
      <div>
      <img src={logo} alt="logo" className="w-[195px] h-[69px] py-3 px-10 bg-opacity-0   "/>
     </div>
    </footer>
  )
}

export default Footer