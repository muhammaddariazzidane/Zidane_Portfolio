import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImYoutube } from "react-icons/im";
import { SiInstagram, SiFacebook, SiTelegram } from "react-icons/si";

const Main = () => {
  return (
    <div className="w-full h-screen text-center" id="about">
      <div className="max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-4xl">
            Hi, I'm <span className="text-emerald-500">Zidane</span>
          </h1>
          <h1 className="py-2 text-4xl">A Front-End Web Developer Lite</h1>
          <p className="py-4 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit inventore veniam ut ratione consequatur corrupti temporibus dolore accusamus sit quia quos labore, cumque odit assumenda recusandae facere explicabo
            suscipit delectus?
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <GoMarkGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <ImYoutube size={25} />
            </div>
            <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <SiInstagram size={25} />
            </div>
            <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <SiFacebook size={25} />
            </div>
            <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <SiTelegram size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
