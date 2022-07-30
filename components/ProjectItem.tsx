import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const projectsItem = ({ title, build, backgroundImg, projectsUrl }: { build: string; title: string; backgroundImg: StaticImageData; projectsUrl: string }) => {
  const text = "React JS";

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl dark:shadow-dark/70 rounded-xl group hover:bg-gradient-to-r from-[#9599E2] to-[#80D0C7]">
      <Image className="rounded-xl group-hover:opacity-10 transition-all ease-in-out duration-500" src={backgroundImg} alt="/" width={900} height={400} />
      <div className="hidden group-hover:block absolute ">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{build} </p>
        <Link href={projectsUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-lg font-bold text-dark hover:bg-dark hover:text-white transition-all duration-500 cursor-pointer">More Info</p>
        </Link>
      </div>
    </div>
  );
};
export default projectsItem;
