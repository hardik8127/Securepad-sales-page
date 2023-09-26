import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import { useState } from "react";

const CoinDescription = () => {
  return (
    <section className="container mx-auto grid-cols-2">
      <div className="block md:flex justify-between align-center text-white">
        <div className="w-100 md:w-1/2 p-10">
          <h2 className=" text-white font-poppins text-[59px] text-start px-4">
            Karat Coin
          </h2>
          <p className="text-white font-poppins text-justify mt-2 px-4 ">
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
          <div
            className="mr-8 mt-8 border h-[500px] rounded-[20px] "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#75757559",
            }}
          >
            <p className=" text-center text-white font-poppins text-[39px] ">
              Token Allocation Image
            </p>
          </div>
        </div>
        <div className="w-100 p-32 md:w-1/2 ">
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid gray",
              marginBottom: "6px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="" >Token Vesting Section</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <table >
              <thead >
                <tr className="text-newgreen flex space-x-4 ">
                  <th >Sl No.</th>
                  <th >Release</th>
                  <th >Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid gray",
              marginBottom: "6px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Purchase History</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <table >
              <thead >
                <tr className="text-newgreen flex space-x-4">
                  <th >Sl No.</th>
                  <th >Release</th>
                  <th >Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CoinDescription;
