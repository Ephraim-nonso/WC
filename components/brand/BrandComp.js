import React from "react";
import Image from "next/image";
import mainLogo from "../../assets/mainl.png";
import mainLogo2 from "../../assets/unknown.png";

const BrandComp = () => {
  return (
    <div>
      <div className="w-screen flex m-auto min-96 justify-center items-center">
        <Image src={mainLogo} width={200} height={200} alt="Weird creatures" />
      </div>
    </div>
  );
};

export default BrandComp;
