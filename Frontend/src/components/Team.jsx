import React from "react";
import Team1 from "../assets/Team1.png"

const Team = () => {
  return (
    <section className="container mx-auto py-36 px-8">
    <h2 className="text-newgreen text-center text-[59px] font-poppins">Team</h2>
    <div className="grid lg:grid-cols-2">
    <div className="flex-center justify-">
    <img src={Team1} alt="Team" className=""/>
    <div>
      <div>
      <h3 className="text-newgreen font-poppins text-[34px]"> Name</h3>
      <h4 className="text-white font-poppins">Founder</h4>
      </div>
    </div>
    
    </div>
    <div className="flex-center justify-center ">
    <img src={Team1} alt="Team" className=""/>
    <div className="">
      <div className="">
      <h3 className="text-newgreen font-poppins text-[34px]"> Name</h3>
      <h4 className="text-white font-poppins">Co-Founder</h4>
      </div>
    </div>
    
    </div>
    
    
    </div>
    
    </section>
  );
};

export default Team;
