import React from 'react';
import logo from "../assets/logo.png"; 
import '../style/nav.css'
const Navbar = () => {
  return (
    <>
      <div id="green1"></div>
      <div id='blue1'></div>
      <div id='blue2'></div>
      <div id="green2"></div>
      <div id="green3"></div>
      <div id="blue5"></div>
      <div id="blue3"></div>
      <div id="blue4"></div>
      <div></div>
      <nav className="w-full flex py-2 px justify-between items-center navbar ">
        <div>
        <img src={logo} alt="logo" className="py-3 px-10 ml-10 "/>
      </div>
        <div className="flex">
        <button className="transition ease-in-out delay-150 bg-newgreen hover:-translate-y-1 hover:scale-110 duration-300 text-black font-semibold py-2 px-6 mr-28  rounded-xl  ">
          Connect Wallet
        </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
