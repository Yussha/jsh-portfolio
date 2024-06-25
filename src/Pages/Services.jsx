import styles from "./layouts.module.css";

import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { TbListDetails } from "react-icons/tb";
import { SiFramework } from "react-icons/si";

import { useState } from "react";

export default function Services() {
  const servicesObj = [
    {
      id: 1,
      service: "Website Development",
      icon: <CgWebsite />,
      details:
        " I can create visually appealing and user-friendly websites using HTML, CSS, JavaScript, and ReactJS",
    },
    {
      id: 2,
      service: "Responsive Website",
      icon: <DiResponsive />,
      details:
        "  I can ensure that websites are optimized for different devices and screen sizes, providing a seamless user experience across desktop, mobile, and tablet devices.",
    },
    {
      id: 3,
      service: "Front-End Frameworks",
      icon: <SiFramework />,
      details:
        "  I am proficient in popular front-end frameworks like Bootstrap and Foundation, which can expedite the development process and provide a solid foundation for building responsive websites.",
    },
    {
      id: 4,
      service: "Attention to Detail",
      icon: <TbListDetails />,
      details:
        " I pay close attention to detail to ensure that websites are pixel-perfect and meet the client's specifications.",
    },
  ];

  const [selectedService, setSelectedService] = useState(1);

  function handleServiceClick(id) {
    setSelectedService(id === selectedService ? selectedService : id);
  }
  return (
    <section
      id="service"
      className={`${styles.sectionLayout} sm:pl-12 md:pr-12 xl:pl-40 xl:pr-40 mr:pt-20 mr:pl-4 mr:pr-4 mr:pb-10 md:pb-28 lg:pb-36 xl:pb-36`}
    >
      <div className={`${styles.aboutContent} `}>
        <h1
          className={`text-5xl font-bold mb-12 sm:text-3xl md:text-5xl mr:mb-8 mr:text-2xl`}
        >
          MY SERVICE <span className={styles.highlight}>AREA</span>
        </h1>
        <div className="flex gap-x-10 sm:flex-col md:flex-row md:gap-x-2 mr:flex-col">
          <ul
            style={{ borderLeftColor: "rgb(161 161 170)" }}
            className="h-fit flex flex-col pt-4 pb-4 sm:ml-0 sm:flex-row sm:pl-0 md:flex-col md:gap-y-4 md:border-l-2 md:pl-4 lg:pl-6 lg:ml-12 lg:gap-y-8 mr:grid mr:grid-rows-2 mr:grid-cols-2 mr:gap-8 mr:pb-8 sm:flex md:flex xl:flex 2xl:flex"
          >
            {servicesObj.map((serviceObj) => (
              <li key={serviceObj.id}>
                <div
                  className={`${styles.contentTitle} flex items-center gap-x-4 sm:gap-x-2 `}
                  onClick={() => handleServiceClick(serviceObj.id)}
                  style={
                    serviceObj.id === selectedService
                      ? { color: " #9dde8b" }
                      : { color: "" }
                  }
                >
                  <span className="text-sm ">{serviceObj.icon}</span>
                  <h6 className="text-sm md:text-md lg:text-lg">
                    {serviceObj.service}
                  </h6>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-1/2 h-fit p-4 leading-7 sm:w-11/12 lg:w-1/2 mr:w-full">
            {servicesObj.map(
              (serviceObj) =>
                serviceObj.id === selectedService && (
                  <p
                    className={`${styles.paraColor} text-justify`}
                    key={serviceObj.id}
                  >
                    {serviceObj.details}
                  </p>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
