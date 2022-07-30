import React from "react";
import Image from "next/image";
import downloaderImg from "../public/img/downloader.png";
import { BsBoxArrowLeft, BsGearWideConnected } from "react-icons/bs";
import Link from "next/link";

const Downloader = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={downloaderImg} alt="/" />
        <div className="text-white absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h1 className=" text-4xl py-2">Downloader Photo/video</h1>
          <h2>Bootstrap 5.2</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <p>Overview</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt numquam perferendis modi dolorem, nulla, repellat ea, odit unde aliquid quasi perspiciatis molestias in aut ratione a accusamus incidunt nam vel magnam
            consequatur provident. Tempora inventore accusantium quos sit nam illum neque quisquam, labore perferendis autem consequatur deleniti soluta expedita, quibusdam harum repellendus maiores sunt magnam veniam amet cupiditate
            veritatis nisi! Itaque veritatis nulla, dolores accusantium numquam minus assumenda exercitationem officia?
          </p>
          <Link href="https://muhammaddariazzidane.000webhostapp.com/" passHref>
            <a target="_blank">
              <button className="px-8 py-2 mt-4 mr-8 rounded-full bg-blue-500 text-white">Demo</button>
            </a>
          </Link>
          <Link href="#" passHref>
            <a target="_blank">
              <button className="px-8 py-2 mt-4 rounded-full bg-slate-600 text-white">Code</button>
            </a>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-700 py-2 flex items-center">
                <BsGearWideConnected className="pr-1 mr-2" /> Bootstrap 5.2
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <BsGearWideConnected className="pr-1 mr-2" /> javascript
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <BsGearWideConnected className="pr-1 mr-2" /> 000webhostapp.com
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <BsBoxArrowLeft size={"1.5em"} />
        </Link>
      </div>
    </div>
  );
};
export default Downloader;
