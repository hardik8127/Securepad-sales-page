import React from 'react'
import logo from "../assets/logo.png"
import mail from "../assets/mail.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/telegram.png"

const Footer = () => {
  return (
    <footer className="w-full flex py-2 px justify-between items-center " style={{background:'linear-gradient(0deg, rgb(0 255 131 / 73%) -234%, rgba(0,0,0,1) 110%)'}}>
      <div>
      <img src={logo} alt="logo" className="w-[195px] h-[69px] py-3 px-10 bg-opacity-0   "/>
     </div>

     <div className="flex space-x-4 mr-6 mt-4">
     <a href="mailto:your-email@example.com">
       <img src={mail} alt="mail" />
     </a>
     <a href="https://twitter.com/">
       <img src={twitter} alt="twitter" />
     </a>
     <a href="https://www.linkedin.com/in">
       <img src={linkedin} alt="linkedin" />
     </a>
     <a href="https://t.me/">
       <img src={telegram} alt="telegram" />
     </a>
   </div>
    </footer>
  )
}

export default Footer