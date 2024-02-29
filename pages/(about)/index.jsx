import styles from "./about.module.css";
import { Title, TechStack } from "../../components";
import techs from "../../data/techs.json";

import { HiInformationCircle } from "react-icons/hi";

const About = () => {
  return (
    <>
      <div
        className="container flex flex-col justify-center items-center mt-[100px] mx-auto w-3/4 lg:w-2/3"
        id="aboutSection"
      >
        <div className="flex flex-col justify-center items-center">
          <Title data-aos="flip-up">
            <HiInformationCircle className="mr-2" />
            About ME
          </Title>
        </div>
        <div
          className="rounded glass px-3 sm:px-4 py-3 border border-blue-400 relative my-5"
          data-aos="fade-right"
          style={{ boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}
        >
          <h2
            className={`${styles.descriptionStyle} font-bold tracking-wide leading-8`}
          >
            As a Full Stack Developer, I possess an impressive arsenal of
            skills. I excel in designing and maintaining responsive websites
            that offer a smooth user experience. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques.
          </h2>
        </div>
        <div
          data-aos="fade-left"
          className={`${styles.skills} flex flex-col items-center rounded glass px-3 sm:px-4 py-3 z-10 border border-blue-400 relative my-5`}
          style={{ boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}
        >
          <Title>Tech Stack</Title>

          <div className="logos">
            <ul>
              {techs.map((tech) => (
                <TechStack key={tech.id} tech={tech} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow1 -left-[400px] top-[2500px]"></div>
      <div className="shadow2 -right-[400px] top-[1000px]"></div>
    </>
  );
};

export default About;
