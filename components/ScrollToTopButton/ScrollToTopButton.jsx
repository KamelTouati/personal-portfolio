import { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import {IoIosArrowDropupCircle} from "react-icons/io";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const topOffset = 300; // Adjust this value to control when the button appears
        setIsVisible(window.pageYOffset > topOffset);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            className={`${styles.scrollButton} ${
                isVisible ? styles.visible : ""
            }`}
            onClick={scrollToTop}
        >
            <IoIosArrowDropupCircle />
        </button>
    );
};

export default ScrollToTopButton;
