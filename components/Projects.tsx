import React from "react";
import imgProjects from "../public/img/tokoamel.png";
import imgProjects1 from "../public/img/zshop.png";
import imgProjects2 from "../public/img/downloader.png";
import imgProjects3 from "../public/img/movieslist.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full lg:scroll-mt-20" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-14">
        <p className="text-xl tracking-widest uppercase text-dark dark:text-white text-center pb-12">Projects</p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Toko Jajanan" build="Bootstrap 5.2" backgroundImg={imgProjects} projectsUrl="/tokoAmel" />
          <ProjectItem title="Toko Mainan WIBU" build="Bootstrap 5.1.3" backgroundImg={imgProjects1} projectsUrl="/tokoWibu" />
          <ProjectItem title="Foto/video Downloader" build="Bootstrap 5.2" backgroundImg={imgProjects2} projectsUrl="/Downloader" />
          <ProjectItem title="Movies Lists" build="React JS" backgroundImg={imgProjects3} projectsUrl="/Movieslist" />
        </div>
      </div>
    </div>
  );
};
export default Projects;
