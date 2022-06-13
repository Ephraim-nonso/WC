import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { providerOptions } from "../connectors/Connector";
import { ethers } from "ethers";

const Connect = () => {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();

  // const web3Modal = new Web3Modal({
  //   network: "mainnet", // optional
  //   cacheProvider: true, // optional
  //   providerOptions, // required
  // });

  const connectWallet = async () => {
    console.log("workimg");
  };

  return (
    <div className="text-center">
      <p
        className="mt-4 font-bold text-5xl text-[#413738]"
        style={{ fontFamily: "Bahnschrift" }}
      >
        0/6666
      </p>
      <button
        type="button"
        className="bg-[#413738] px-6 rounded-full py-2 uppercase text-[#FEE0DF] mt-4 text-xl"
        onClick={connectWallet}
        style={{ fontFamily: "Bahnschrift" }}
      >
        Connect
      </button>
      <p
        className="uppercase my-4 text-[#413738] font-bold text-sm"
        style={{ fontFamily: "Bahnschrift" }}
      >
        First 666 free - 0.005 eth - max 5 per wallet.
      </p>
    </div>
  );
};

export default Connect;
