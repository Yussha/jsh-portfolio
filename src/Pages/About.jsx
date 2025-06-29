import styles from "./layouts.module.css";

import MyImage from "../../assets/mypicture.jpg";

import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { techStacks } from "../../data/techStacks.js";

export default function About() {
  return (
    <section
      id="about"
      className={`${styles.sectionLayout} sm:pl-12 xl:pl-40 xl:pr-40 mr:pt-20 mr:pl-4 mr:pr-4 mr:pb-10 md:pb-28 lg:pb-36 xl:pb-36`}
    >
      <div className={`${styles.aboutContent} `}>
        <div className="flex gap-x-20 flex-col sm:gap-y-4 md:flex-row md:pr-12">
          <div className="w-3/4 sm:w-11/12 mr:w-full">
            <h1
              className={`text-5xl font-bold mb-12 sm:text-3xl md:text-5xl mr:text-2xl mr:mb-8`}
            >
              ABOUT <span className={styles.highlight}>JOSHUA</span>
            </h1>
            <p
              className={`${styles.paraColor} xl:leading-8 sm:leading-7 mr:leading-8 mr:mb-8`}
            >
              I started learning front-end development during my second year of college. I became interested in building websites and took the initiative to teach myself how to code and design interactive web interfaces. As I continued learning, I began exploring full-stack development especially during my capstone project, where I built a complete web application using Laravel and MySQL. That hands-on experience helped me understand both the front-end and back-end workflow, and it sparked a deeper passion for creating fully functional, end-to-end web solutions. My journey is still ongoing as I continue to grow and explore new tools and technologies in the world of web development.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <img className="w-44 rounded-lg md:w-64 " src={MyImage} alt="" />
            <div className="flex gap-x-3 mt-3">
              <a
                href="https://www.facebook.com/joshua.bolasa?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook
                  className={`${styles.icons}`}
                  style={{ cursor: "pointer" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/jshbolasa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                {" "}
                <FaLinkedin
                  className={`${styles.icons}`}
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a href="https://github.com/Yussha" target="_blank">
                {" "}
                <FaGithub
                  className={`${styles.icons}`}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-11/12 mt-10">
          <p
            className={`${styles.paraColor} xl:leading-8 sm:leading-7  mr:leading-8`}
          >
            When I'm not busy with school work, I'll often writing a code or
            enjoying my hobbies. I like playing online games, watching dramas,
            and anime. I believe that taking a break and getting some fresh air
            can help clear my mind when I encounter difficult coding problems.
            It allows me to approach problem-solving with a fresh perspective
            and renewed focus.
          </p>
        </div>

        <div className="mt-12">
          <h1 className="text-2xl mb-8 sm:text-lg md:text-2xl mr:text-xl">
            TECHNOLOGY STACK
          </h1>
          <ul className="w-fit grid grid-cols-5 gap-8">
            {techStacks.map((techStack) => (
              <li
                className="flex flex-col items-center gap-y-4"
                key={techStack.id}
              >
                <img
                  className="w-12 sm:w-8 md:w-10 mr:w-7"
                  src={techStack.img}
                  alt=""
                />
                <h6 className={`${styles.paraColor} text-sm`}>
                  {techStack.techName}
                </h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
