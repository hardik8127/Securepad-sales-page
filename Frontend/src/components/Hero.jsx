import React, { useState } from "react";
import karat from "../assets/karat.png";
import Timer from "./Timer";

function Hero() {
//const [count, setcount] = useState(0)
  

  return (
    <section className="container mx-auto grid-cols-2">
    
      <div>
        <h1 className="justify-center text-center text-[46px] text-newgreen font-poppins">
          Sales Page
        </h1>
      </div>
      <div
        className="p-4 grid grid-cols-1
     md:grid-cols-2 items-center mt-[-20px] py-16 px-10"
      >
        <div className=" ml-16 border w-[677px] h-[508px] rounded-[15px] ">
          <img src={karat} className="w-full h-full " />
        </div>
        <div className="px-20  ">
          <h2 className="font-bold  text-[39px] text-white py-2 ">
            Karat Coin
          </h2>

          <div className="py-2">
            <h4>
              <span className=" border w-[37px] h-[20px] rounded-md border-newgreen text-newgreen ">
                {" "}
                Initial
              </span>{" "}
              <span className="border w-[37px] h-[20px] rounded-md  border-newblue text-newblue mx-1">
                {" "}
                Airdrop
              </span>{" "}
              <span className="border w-[37px] h-[20px] rounded-md  border-gray-400  text-gray-400">
                Non Initial{" "}
              </span>
            </h4>
          </div>
          <div>
            <h3 className="mt-2">
              <span className="text-[33px] text-white font-poppins ">
                15,545
              </span>{" "}
              <span className="text-[23px] text-gray-400 font-poppins font-semibold">
                Supporter
              </span>
            </h3>
          </div>
          <div>
            <h3 className="mt">
              <span className="text-[33px] text-newgreen font-poppins ">
                45,546,614
              </span>{" "}
              <span className="text-[23px] text-gray-400 font-poppins font-semibold">
                /30,000 USDT
              </span>
            </h3>
          </div>
          <div >
            <hr className="w-[550px] h-[9px] border-radius-[100px] bg-newgreen  " />
            <h5 className=" text-white text-end  text-[19px] font-poppins">
              63,165.24% raised
            </h5>
            
          </div>
          <div className="text-white ">
            <h5>Start time : 2023-09-07 09:30:00 UTC+5.5</h5>
            <h5>End time : 2023-09-08 09:30:00 UTC+5.5</h5>
            <h5>Ends in</h5>
            <div className="text-newgreen text-[49px]">
              <Timer duration={2 * 24 * 60 * 1000} />
            </div>
          </div>

          <div> <input type="number" className=" bg-black border rounded-md text-white font-poppins mt-2 h-8 text-[25px]" /></div>

          <div className="mt-6 flex gap-7">
            <button
              className="bg-newgreen  px-20 py-3 
                 text-black pb-2 rounded-3xl font-poppins font-bold 
                 hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
