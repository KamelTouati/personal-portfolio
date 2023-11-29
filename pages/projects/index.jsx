import { Title, ProjectCard } from "../../components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.module.css";
import projects from "../../data/projects.json";
import { FaFileCode } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="absolute top-0 lg:-left-[300px] left-0 ">
        <picture>
          {/* <source srcSet="assets/images/bg1.avif" type="image/avif" /> */}
          <img
            // src="/_next/static/media/docs@tinypng.d9e4dcdc.png"
            srcSet="assets/images/bg1.avif"
            alt=""
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>
        {/* <img src="./assets/images/bg1.png" alt="" /> */}
      </div>
      <div className="absolute top-0 right-0">
        <picture>
          {/* <source
              srcSet="assets/images/bg2.avif"
              type="image/avif"
            /> */}
          <img
            //   src="/_next/static/media/docs@tinypng.d9e4dcdc.png"
            srcSet="assets/images/bg2.avif"
            alt=""
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
            decoding="async"
          />
        </picture>

        {/* <img src="./assets/images/bg2.png" alt="" /> */}
      </div>
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
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="zoom-in"
            className="flex flex-col gap-y-4 items-center"
          >
            <ProjectCard project={project} image={`${project.img}`} />
          </div>
        ))}
        <Title>New projects coming soon.. </Title>
      </div>
    </>
  );
};

export default Projects;
