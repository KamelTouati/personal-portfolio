import { Title } from "../index";
import { BsGithub } from "react-icons/bs";
import { RxEnter } from "react-icons/rx";

const ProjectCard = ({ image, ...props }) => {
  return (
    <div
      className={
        "flex-col lg:items-center lg:flex lg:flex-row rounded-lg glass px-3 sm:px-4 border border-blue-400 relative my-5 py-5 overflow-hidden "
      }
      style={{
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
      }}
    >
      <div className="rounded lg:mr-5 lg:w-1/3">
        <img
          className="object-cover h-[200px] w-full "
          //   src={props.project.img}
          src={image}
          alt=""
        />
      </div>
      <div className="description text-white lg:w-2/3">
        <h1 className="text-center font-bold text-[var(--color2)] mt-2.5 md:mt-0">
          {props.project.title}
        </h1>
        <p className="leading-8 tracking-normal">{props.project.description}</p>
        <div className="flex md:flex-row flex-wrap gap-x-3 my-1">
          {props.project.tech.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center rounded glass py-1 px-2 border border-[#2b4776] relative gap-1.5 my-2"
            >
              <h3>{technology}</h3>
            </div>
            // <Title key={technology.id}>{technology}</Title>
          ))}
        </div>
        <div className="flex gap-x-3 my-1 font-bold text-sm">
          <a href={props.project.code} target="_blank">
            <div className="flex items-center rounded glass p-2 border border-[#222f45] relative gap-1.5">
              <BsGithub />
              <h3>Code</h3>
            </div>
          </a>
          {/* <a href={props.project.live}> */}
          <a href="#">
            <div className="flex items-center rounded glass p-2 border border-[#222f45] relative gap-1.5">
              <RxEnter />
              <h3>Live Demo</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
