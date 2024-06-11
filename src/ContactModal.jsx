import styles from "./Pages/layouts.module.css";

import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { forwardRef } from "react";

const ContactModal = forwardRef(function ContactModal(props, ref) {
  return (
    <section
      ref={ref}
      style={{ display: "none" }}
      className={`${styles.contact} fixed right-16 sm:w-8/12 sm:p-8 md:w-6/12 lg:w-4/12 lg:p-10  xl:w-4/12 xl:p-10 sm:bottom-28 md:top-w8 lg:bottom-28 xl:bottom-28 2xl:bottom-28 mr:bottom-28 mr:right-3 mr:p-3 mr:w-80  sm:right-20 md:right-20 lg:right-20 xl:right-20  2xl:right-20`}
    >
      <div className="mb-10">
        <h1 className="text-center text-2xl font-bold">
          Drop your message in 👇
        </h1>
      </div>
      <ul className="flex flex-col gap-y-4 ">
        <li className={`${styles.icons}`}>
          <a
            className="flex flex-row items-center gap-x-2 text-lg mr:w-auto "
            style={{ cursor: "pointer" }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bolasajoshua73@example.com"
            target="_blank"
          >
            <MdEmail />
            bolasajoshua73@gmail.com
          </a>
        </li>
        <li className={`${styles.icons}`}>
          <a
            className="flex flex-row items-center gap-x-2 text-lg"
            style={{ cursor: "pointer" }}
            href="https://www.facebook.com/joshua.bolasa?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook />
            Joshua Bolasa
          </a>
        </li>
        <li className={`${styles.icons}`}>
          <a
            className="flex flex-row items-center gap-x-2 text-lg"
            style={{ cursor: "pointer" }}
            href="https://www.tiktok.com/@__shuy?_t=8mzWlLKCOZt&_r=1"
            target="_blank"
          >
            <FaTiktok />
            __shuy
          </a>
        </li>
      </ul>
    </section>
  );
});

export default ContactModal;

// export default function ContactModal() {
//   return (

//   );
// }
