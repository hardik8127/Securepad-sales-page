import React from "react";
import Accordion from "./Accordion";
import { useState } from "react";

const CoinDescription = () => {

  const [list, setList] = useState([
    {
      question: "What's your name ?",
      answer: "My name is Lun Dev",
      active: 1
    },
    {
      question: "What do you do ?",
      answer: "I'm FullStack Deveoper",
    }
  ]);

  return (
    <section>
      <div className="container mx-auto">
        <div>
          <h2 className=" text-white font-poppins text-[59px] text-start px-28 ">
            {" "}
            Karat Coin
          </h2>
          <div className="px-28">
          <p className="text-white font-poppins text-justify mt-2  w-[600px] ">
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
          <div className="mr-8 mt-8 border w-[600px] h-[500px] rounded-[20px] ">
          <p className=" text-center text-white font-poppins text-[39px] ">Token Allocation Image</p>
          <img src="/" alt="/" />
          </div>
          </div>

        </div>
              
      </div>
    </section>
  );
};

export default CoinDescription;
