import styles from "./contact.module.css";
import { Title } from "../../components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillMessage } from "react-icons/ai";
import Image from "next/image";
import smile from "public/assets/images/smile.gif";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_248zxfu",
        "template_5tigqpq",
        form.current,
        "ClP_q6H5G2qFAdmtC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <div className="relative w-full overflow-visible">
        <div className="shadow3"></div>
        <div className="shadow2 right-0"></div>
        <div
          className="flex flex-col justify-center items-center my-[100px] mx-auto w-3/4 lg:w-2/3"
          id="contactSection"
        >
          <div className="flex items-center">
            <Title data-aos="flip-up">
              <AiFillMessage className="mr-2" />
              Contact
              <Image
                className="ml-1.5 w-[30px] z-10"
                src={smile}
                alt="public"
              />
            </Title>
          </div>

          <form ref={form} onSubmit={sendEmail} data-aos="zoom-in">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-[var(--color2)]"
            >
              Your Name
            </label>
            <div className="relative">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
					</div> */}
              <input
                type="text"
                id="name"
                name="user_name"
                className={`${styles.inputBgColor} w-[500px] border border-gray-300 text-white text-sm rounded-lg block p-2.5`}
                placeholder="name"
              />
            </div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-[var(--color2)]"
            >
              Your Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email-address-icon"
                name="user_email"
                className={`${styles.inputBgColor} w-[500px] border border-gray-300 text-white text-sm rounded-lg block p-2.5`}
                placeholder="name@domaine.com"
              />
            </div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[var(--color2)] "
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`${styles.inputBgColor} resize-none w-[500px] block p-2.5 text-sm text-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Leave a comment..."
            ></textarea>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 my-2"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                SEND
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
