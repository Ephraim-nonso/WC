import React from "react";
import Image from "next/image";
import mainLogo from "../../assets/mainl.png";
import mainLogo2 from "../../assets/unknown.png";

const BrandComp = () => {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
        <Image
          src={mainLogo}
          width={560}
          height={300}
          alt="Weird creatures"
          className=""
        />
      </div>

      <div
        className="block sm:hidden m-auto w-full text-center font-bold"
        style={{ fontFamily: "Bahnschrift" }}
      >
        <h1 className="text-5xl">Weird Creatures</h1>
      </div>
    </div>
  );
};

export default BrandComp;
