import React from 'react';
import logo from "../assets/logo.png"; 
const Navbar = () => {
  return (
    <nav className="w-full flex py-2 px justify-between items-center navbar ">
      <div>
      <img src={logo} alt="logo" className="py-3 px-10 ml-10 "/>
     </div>
      <div className="flex">
      <button class="transition ease-in-out delay-150 bg-newgreen hover:-translate-y-1 hover:scale-110 duration-300 text-black font-semibold py-2 px-6 mr-28  rounded-xl  ">
        Connect Wallet
       </button>
      </div>
    </nav>
  );
};

export default Navbar;
