import React from "react";
import Image from "next/image";
import sertiImg from "../public/img/serti1.png";
import sertiImg1 from "../public/img/serti2.png";
import sertiImg2 from "../public/img/serti3.png";
import sertiImg4 from "../public/img/serti4.png";
import sertiImg3 from "../public/img/sertiaws.png";

const Sertifikat = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-[1240px] mx-auto text-center mb-16">
        <p className="text-xl tracking-widest uppercase text-dark dark:text-white text-center pb-12 pt-12">Sertifikat</p>
        <div className="flex flex-wrap mt-3 justify-center">
          <a className="mr-3 mt-2 flex justify-center items-center">
            <Image src={sertiImg} width={400} height={400} />
          </a>
          <a className="mr-3 mt-2 flex justify-center items-center">
            <Image src={sertiImg1} width={400} height={400} />
          </a>
          <a className="mr-3 mt-2 flex justify-center items-center">
            <Image src={sertiImg3} width={400} height={400} />
          </a>
          <a className="mr-3 mt-2 flex justify-center items-center">
            <Image src={sertiImg2} width={400} height={400} />
          </a>
          <a className="mr-3 mt-2 flex justify-center items-center">
            <Image src={sertiImg4} width={400} height={400} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sertifikat;
