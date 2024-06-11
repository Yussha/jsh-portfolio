import styles from "./layouts.module.css";

import MyImage from "../../assets/mypicture.jpg";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`${styles.sectionLayout} `}>
      <div className="flex flex-col justify-center items-center">
        <div
          style={{ cursor: "pointer" }}
          className={`flex items-center  gap-x-2`}
        >
          <img
            className={` rounded-full object-cover w-10 max-sm:w-20 mr:w-8`}
            src={MyImage}
            alt=""
          />
          <h1 className={` font-bold max-sm:text-3xl text-lg mr:text-sm`}>
            JsH
          </h1>
        </div>

        <ul
          className={`${styles.footerContent} flex mt-8 items-center gap-x-4 pb-10 pl-8 pr-8`}
        >
          <li>
            <a style={{ cursor: "pointer" }} className="text-sm" href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }} className="text-sm" href="#service">
              SERVICES
            </a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }} className="text-sm" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
        </ul>

        <div className="flex gap-x-4 mt-8">
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
    </footer>
  );
}
