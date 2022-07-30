import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImYoutube } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { SiInstagram, SiFacebook, SiTelegram } from "react-icons/si";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const Router = useRouter();

  useEffect(() => {
    if (Router.asPath === "/tokoAmel" || Router.asPath === "/tokoWibu" || Router.asPath === "/Downloader" || Router.asPath === "/Movieslist") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [Router]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] top-0">
      <div style={{ backgroundColor: `${navBg}` }} className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/../public/img/Tailwindcss1.png" width="125" height="50" alt="/" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="#">
              <li className="ml-10 text-sm uppercase hover:text-emerald-500">Home</li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:text-emerald-500">Projects</li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:text-emerald-500">Skills</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:text-emerald-500">ABout</li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 mr-10 text-sm uppercase hover:text-emerald-500">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden mr-5" style={{ color: `${linkColor}` }}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed right-[-100%] top-0 p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/../public/img/tailwindcss1.png" width="87" height="35" alt="/" />
              <div onClick={handleNav} className="p-3 cursor-pointer">
                <GrClose size={"1.5em"} className="hover:scale-110 ease-in duration-300" />
              </div>
            </div>
            <div className=" border-b border-emerald-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Muhammad Dariaz Zidane</p>
            </div>
          </div>
          <div className=" flex flex-col">
            <ul className="uppercase">
              <Link href="#">
                <li onClick={() => setNav(false)} className="py-4 hover:text-emerald-500 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#projects">
                <li onClick={() => setNav(false)} className="py-4 hover:text-emerald-500 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="#skills">
                <li onClick={() => setNav(false)} className="py-4 hover:text-emerald-500 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="#about">
                <li onClick={() => setNav(false)} className="py-4 hover:text-emerald-500 text-sm">
                  About
                </li>
              </Link>
              <Link href="#contact">
                <li onClick={() => setNav(false)} className="py-4 hover:text-emerald-500 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-5">
              <p className=" uppercase tracking-widest text-emerald-600">follow me</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiInstagram />
                </div>
                <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <GoMarkGithub />
                </div>
                <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <ImYoutube />
                </div>
                <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiFacebook />
                </div>
                <div className="rounded-full shadow-lg bg-slate-300 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiTelegram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
