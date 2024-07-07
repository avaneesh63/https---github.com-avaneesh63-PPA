import React from "react";
import client1 from "../../../public/images/client1.svg";
import client2 from "../../../public/images/client2.svg";
import client3 from "../../../public/images/client3.svg";
import client4 from "../../../public/images/client4.svg";
import client5 from "../../../public/images/client5.svg";
import client6 from "../../../public/images/client6.svg";
import client7 from "../../../public/images/client7.svg";
import Image from "next/image";
const Client = () => {
  const clientImg = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
  ];
  return (
    <div className="flex flex-col p-[10rem] pt-[5rem] pb-[5rem]">
      <div className="flex flex-col justify-center items-center">
        <span className=" text-[#4D4D4D] text-[3.6rem] font-semibold">
          Our Clients
        </span>
        <span className=" text-[#717171] text-[1.6rem]">
          We have been working with some Fortune 500+ clients
        </span>
      </div>
      <div className="flex gap-[10rem] justify-center mt-[3rem]">
        {clientImg.map((imgUrl) => (
          <Image src={imgUrl} alt="client" />
        ))}
      </div>
      <div className="flex flex-col  items-center mt-[5rem]">
        <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
          Manage your entire community{" "}
        </span>
        <span className="text-[#4D4D4D] text-[3.6rem] font-semibold">
          in a single system
        </span>
        <span className="text-[#717171] font-normal text-[1.6rem]">
          Who is Nextcent suitable for?
        </span>
      </div>
    </div>
  );
};

export default Client;
