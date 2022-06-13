import React from "react";
import Image from "next/image";
import mainLogo from "../../assets/mainl.png";
import mainLogo2 from "../../assets/unknown.png";

const BrandComp = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        src={mainLogo}
        width={250}
        height={140}
        alt="Weird creatures"
        className=""
      />
    </div>
  );
};

export default BrandComp;
