import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import About from "./(about)";
import Contact from "./(contact)";
import Portfolio from "./(projects)";
import { Title, Navbar, ScrollToTopButton } from "../components/index";
import personalImg from "public/assets/images/personal-img.png";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <ScrollToTopButton />
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
      {/* HOME */}
      <div className="container flex flex-col justify-center items-center mt-[100px]">
        <div className="flex flex-col justify-center items-center">
          {/* <Title>&#9995; Hi !</Title> */}
          <div className="flex items-center gap-2.5">
            <img
              className="w-[50px]"
              src="https://www.emojiall.com/images/240/microsoft-teams/1f44b.png"
              alt=""
            />
            <Title> Hi !</Title>
          </div>
          <h3 className="font-bold md:font-extrabold text-white text-[40px] md:text-[45px] text-center">
            I&apos;m Touati Kamel
          </h3>
        </div>
        <div className="md:h-[350px] md:w-[350px] h-[280px] w-[280px] flex justify-center items-center">
          <div
            className={`rounded-full md:h-[330px] md:w-[330px] ${styles.circleColor} h-[262px] w-[262px]`}
          ></div>
          <div className="rounded-full md:h-[350px] md:w-[350px] glass absolute top-[0] left-[0] h-[280px] w-[280px]"></div>
          <Image
            src={personalImg}
            // src="assets/images/personal img.png"
            className="absolute bottom-0 right-0 rounded-full"
            alt="my-personal-picture"
          />
        </div>

        <div className="mt-2 flex flex-col items-center">
          <p className="text-[var(--color3)] text-[20px] font-light text-center">
            Passionate Full Stack developer · UI designer · Logo maker
          </p>
          <div
            className={`flex justify-center items-center gap-x-10 text-[var(--color3)] md:text-[32px] text-[24px] my-2.5 ${styles.box} w-[300px] p-3`}
          >
            <a href="https://www.facebook.com/kameltouati19" target="_blank">
              <span>
                <MdFacebook className="text-gradient z-10" />
              </span>
            </a>
            <a href="https://www.instagram.com/kamel__touati/" target="_blank">
              <span>
                <BsInstagram className="z-10" />
              </span>
            </a>
            <a href="https://github.com/KamelTouati" target="_blank">
              <span>
                <BsGithub className="z-10" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/kamel-touati-bb436b230/"
              target="_blank"
            >
              <span>
                <BsLinkedin className="z-10" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* END HOME */}

      {/* ABOUT */}
      <About />
      {/* END ABOUT */}

      {/* PORTFOLIO */}
      <Portfolio />
      {/* END PORTFOLIO */}

      {/* CONTACT */}
      <Contact />
      {/* END CONTACT */}
    </>
  );
};

export default Landing;
