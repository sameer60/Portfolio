import { motion } from "framer-motion";
import { FaLongArrowAltRight, FaReact, FaHtml5 } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import Fade from "react-reveal/Fade";
import "./index.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-first-container">
        <motion.div
          className="hero-content"
          animate={{ x: ["-150vw", "0vw"] }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="hero-heading">
            Proficient in <span className="hero-name">designing</span> elegant
            and <span className="hero-name">high-end</span> user interfaces.
          </h1>
          <p className="hero-description">
            Hi there! I'm Sameer, a frontend developer passionate about crafting
            captivating web experiences. I create clean, user-friendly designs
            and help businesses create beloved products for the web.
          </p>
          <a href="#contact">
            <button className="get-in-touch-button">
              Get in touch &nbsp;
              <FaLongArrowAltRight />
            </button>
          </a>
        </motion.div>
        <Fade>
          <div className="hero-image-container">
            <img
              className="hero-image"
              src="https://res.cloudinary.com/didtdrgsj/image/upload/v1689407086/c90dcd89-996e-43e2-92e7-4cdddab91c76_2-removebg-preview_rn7skp.png"
              alt="Hero"
            />
          </div>
        </Fade>
      </div>
      <div className="skills-container">
        <div className="skill-box">
          <BiLogoJavascript className="skill-icon" />
          <p className="skill-name">Javascript</p>
        </div>
        <div className="skill-box">
          <FaReact className="skill-icon" />
          <p className="skill-name">ReactJS</p>
        </div>
        <div className="skill-box">
          <FaHtml5 className="skill-icon" />
          <p className="skill-name">HTML5</p>
        </div>
        <div className="skill-box">
          <BiLogoTailwindCss className="skill-icon" />
          <p className="skill-name">Tailwind</p>
        </div>
        <div className="skill-box">
          <SiNextdotjs className="skill-icon" />
          <p className="skill-name">NextJS</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
