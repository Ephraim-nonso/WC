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
    // const instance = await web3Modal.connect();

    // const provider = new ethers.providers.Web3Provider(instance);
    // const signer = provider.getSigner();
  };

  return (
    <div className="text-center">
      <p className="mt-4 font-bold text-4xl text-[#413738]">0/6666</p>
      <button
        type="button"
        className="bg-[#413738] px-6 rounded-full py-2 uppercase text-[#FEE0DF] mt-4"
        onClick={connectWallet}
      >
        Connect
      </button>
      <p className="uppercase my-4 text-[#413738] font-bold text-xs">
        First 666 free - 0.005 eth - max 5 per wallet.
      </p>
    </div>
  );
};

export default Connect;
