import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers, Contract } from "ethers";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { formatAddress } from "../../utils/helper";
import { useContract, useProvider, useSigner } from "wagmi";
import contractABI from "../../utils/ab.json";

const Connect = () => {
  const provider = useProvider();
  const { data: signer } = useSigner();

  // console.log(signer);
  // console.log(provider);
  // console.log(whitelist);

  // Use wagmi hook to
  const contract = useContract({
    addressOrName: "0x80e7289e4ede11AB6a0648a7e3A58f944Cb8433d",
    contractInterface: contractABI,
    signerOrProvider: signer,
  });
  const whitelist = [
    "0xC635dC7e540d384876aC4D6178D9971241b8383B",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
    "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
    "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
    "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
    "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
    "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
    "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
    "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    "0xf18be8A5FcBD320fDe04843954c1c1A155b9Ae2b",
  ];

  const handleMint = async () => {
    const leafNodes = whitelist.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });
    const rootHash = "0x" + merkleTree.getRoot().toString("hex");

    console.log(rootHash);

    // let address = whitelist.indexOf(data?.address);
    let address = whitelist[whitelist.indexOf(data?.address)];
    let hashedAddress = keccak256(address);
    let proof = merkleTree.getHexProof(hashedAddress);
    console.log(proof);

    let v = merkleTree.verify(proof, hashedAddress, rootHash);
    console.log(v); // returns true

    // NFT calculation.
    const single = 0.005;
    const toBePaid = JSON.stringify(single);
    const costOfNFT = ethers.utils.parseEther(toBePaid);

    const mint = await contract.whitelistMint("1", proof);
    console.log(await mint.wait());
    // console.log(contract);
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
          className="bg-[#413738] px-6 cursor-not-allowed rounded-full py-2 uppercase text-[#FEE0DF] m-auto  text-xl w-48 sm:w-full"
          onClick={() => {
            connect();
          }}
          style={{ fontFamily: "Bahnschrift" }}
        >
          <p>
            {!!data?.address
              ? `${formatAddress(data?.address)}`
              : "NOT LIVE YET"}
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
