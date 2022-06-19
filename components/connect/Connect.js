import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers, Contract } from "ethers";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { formatAddress } from "../../utils/helper";
import { useContract, useProvider, useSigner } from "wagmi";
import contractABI from "../../utils/ab.json";

const Connect = () => {
  const provider = useProvider();
  const signer = useSigner();

  // Use wagmi hook to
  const contract = useContract({
    addressOrName: "0x11eCEf94728Fb5048c1dB845f34Be160Ed5AaE51",
    contractInterface: contractABI,
    signerOrProvider: provider,
  });

  const handleMint = async () => {
    // const single = "0.02";

    // const mintContract = contract.connect(provider);
    // const callFunc = mintContract.mint("1", {
    //   value: ethers.utils.parseEther(single),
    // });
    // console.log(callFunc);

    // NFT calculation.
    const single = 0.02;
    const toBePaid = JSON.stringify(single);
    const costOfNFT = ethers.utils.parseEther(toBePaid);
    console.log(toBePaid, costOfNFT);

    // Contract interaction.
    const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = myProvider.getSigner();
    const contractInstance = new Contract(
      "0x11eCEf94728Fb5048c1dB845f34Be160Ed5AaE51",
      contractABI,
      signer
    );
    const mint = await contractInstance.mint("1", {
      value: costOfNFT,
    });
    console.log(mint);
  };

  // Get data from wagmi hooks
  const { data } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();

  return (
    <div className="text-center">
      <div>
        <p
          className="mt-4 font-bold text-5xl text-[#413738]"
          style={{ fontFamily: "Bahnschrift" }}
        >
          0/6666
        </p>
      </div>

      <div>
        <div
          className="bg-[#413738] px-6 cursor-pointer rounded-full py-2 uppercase text-[#FEE0DF] m-auto  text-xl w-48 sm:w-full"
          onClick={() => connect()}
          style={{ fontFamily: "Bahnschrift" }}
        >
          <p>
            {!!data?.address ? `${formatAddress(data?.address)}` : "Connect"}
          </p>
        </div>
      </div>

      <div>
        {!!data?.address ? (
          <p
            className="text-[#413738] px-6 cursor-pointer rounded-full py-2 uppercase bg-[#FEE0DF] m-auto mt-1 sm:m-1 w-48 sm:w-full text-xl border-2 cursor-pointer border-solid border-[#413738]"
            style={{ fontFamily: "Bahnschrift" }}
            onClick={handleMint}
          >
            Mint
          </p>
        ) : null}
        {!!data?.address ? (
          <p
            className="text-[#413738] px-6 cursor-pointer rounded-full py-2 uppercase bg-[#FEE0DF] m-auto mt-1 sm:m-1 w-48 sm:w-full text-xl border-2 cursor-pointer border-solid border-[#413738]"
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
