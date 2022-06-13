import React from "react";
import Image from "next/image";
import nftShowOne from "../../assets/nft.png";
import nftShowTwo from "../../assets/nft2.png";
import Connect from "../connect/Connect";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly sm:items-end absolute inset-x-0 bottom-0">
      <div>
        <Image src={nftShowTwo} alt="show-nft" width={500} height={160} />
      </div>
      <div>
        <Connect />
      </div>
      <div>
        <Image src={nftShowOne} alt="show-nft" width={500} height={160} />
      </div>
    </div>
  );
};

export default Footer;
