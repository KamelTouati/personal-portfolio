import { Title, ProjectCard } from "../../components";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import "./projects.module.css";
import projects from "../../data/projects.json";
import { FaFileCode } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import fire from "public/assets/images/fire.gif";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="w-3/4 lg:w-2/3 flex flex-col justify-center items-center mt-[100px] mx-auto"
        id="projectsSection"
      >
        <div className="flex flex-col justify-center items-center">
          <Title data-aos="flip-up">
            <FaFileCode className="mr-2" />
            Projects
          </Title>
        </div>
        {projects.slice(0, 5).map((project) => (
          <div
            key={project.id}
            data-aos="zoom-in"
            className="flex flex-col gap-y-4 items-center"
          >
            <ProjectCard project={project} image={`${project.img}`} />
          </div>
        ))}
        <div className="flex items-center">
          <Link href="/projects" className="z-10">
            <Title className='z-10'>
              <RxEnter className="mr-1.5" />
              See more
              <Image className="ml-1.5 w-[30px]" src={fire} alt="fire" />
            </Title>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
