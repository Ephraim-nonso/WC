import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { providerOptions } from "../connectors/Connector";
import { ethers } from "ethers";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { formatAddress } from "../../utils/helper";
const Connect = () => {
  // const [provider, setProvider] = useState();
  // const [library, setLibrary] = useState();
  // const [account, setAccount] = useState();
  // const [network, setNetwork] = useState();
  // const [chainId, setChainId] = useState();

  const { data } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();

  // const web3Modal = new Web3Modal({
  //   network: "mainnet", // optional
  //   cacheProvider: true, // optional
  //   providerOptions, // required
  // });

  // const connectWallet = async () => {
  //   console.log("workimg");
  // };

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
        onClick={() => connect()}
        style={{ fontFamily: "Bahnschrift" }}
      >
        {!!data?.address ? formatAddress(data?.address) : "Connect"}
      </button>

      <div>
        {!!data?.address ? (
          <p
            className="uppercase my-4 text-[#413738] font-bold text-sm cursor-pointer"
            style={{ fontFamily: "Bahnschrift" }}
            onClick={() => disconnect()}
          >
            Disconnect
          </p>
        ) : null}

        <p
          className="uppercase my-4 text-[#413738] font-bold text-sm"
          style={{ fontFamily: "Bahnschrift" }}
        >
          First 666 free - 0.005 eth - max 5 per wallet.
        </p>
      </div>
    </div>
  );
};

export default Connect;
