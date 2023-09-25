import React from "react";
import Accordion from "./Accordion";
//import { useState } from "react";

const CoinDescription = () => {
  


  return (
    <section className="container mx-auto grid-cols-2">
      <div id="container">
        <div>
          <h2 className=" text-white font-poppins text-[59px] text-start px-28 ">
            {" "}
            Karat Coin
          </h2>
          <div style={{width:'50%'}} className="px-10 ml-8">
          <p className="text-white font-poppins text-justify mt-2 ">
            The largest protocol on ZKSync. Karat has over 300,000 wallets
            actively transacting. Each user has verified their web3 wallet and
            their web2 id/behavior data. Karat is a data access control
            middleware developed by senior engineers from Apple, Google, and
            Forbes 30u30 serial entrepreneur. It leverages on-chain MPC and ZK
            technologies to create a sharable Web 2 & 3 ID data layer. Karat has
            received investments from institutions such as Bitmart, NEO Eco,
            Longling Capital, Emurgo Capital, Milestone Capital, and others.
            Karat encrypts user data such as email and Twitter, links it to the
            user’s wallet, and stores it on IPFS. Users and nodes are then given
            the MPC private key, allowing them to completely decentralize
            control over all data access permissions. This infrastructure is
            intended to be the infrastructure of all future Dapps that require
            Web3 social, data indexing, advertising delivery, and login
            permission calls.{" "}
          </p>
          <div className="mr-8 mt-8 border h-[500px] rounded-[20px] " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#75757559',}}>
          <p className=" text-center text-white font-poppins text-[39px] " >Token Allocation Image</p>
          </div>
          </div>

          <div>
          
          </div>

        </div>
              
      </div>
    </section>
  );
};

export default CoinDescription;
