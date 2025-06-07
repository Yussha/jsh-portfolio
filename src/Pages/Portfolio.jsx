import styles from "./layouts.module.css";

import { projects } from "../../data/projects";

import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  function handleOpenWebsite(url) {
    window.open(url, '_blank')
  }
  function handleOpenRepo(url) {
    window.open(url, '_blank')
  }
  return (
    <section
      id="portfolio"
      className={`${styles.sectionLayout} sm:pl-12 xl:pl-40 xl:pr-40 mr:pt-20 mr:pl-4 mr:pr-4 mr:pb-10 md:pb-20 lg:pb-28 xl:pb-28`}
    >
      <div className={`${styles.aboutContent} `}>
        <h1
          className={`text-5xl font-bold mb-12 sm:text-3xl md:text-5xl mr:text-2xl`}
        >
          MY <span className={styles.highlight}>PROJECTS</span>
        </h1>

        <div className="flex flex-col gap-y-10 sm:pr-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} flex p-3 gap-x-8 rounded-lg sm:flex-col sm:gap-y-4 lg:flex-row mr:flex-col mr:gap-y-8 `}
            >
              <div class="lg:w-[60%]">
                <img className="w-full h-full  rounded-lg" src={project.img} alt="" />
              </div>

              <div className="lg:w-[40%]">
                <h1 className="text-2xl mb-4">{project.projectName}</h1>
                <p className={`${styles.paraColor} text-sm leading-7 mb-6`}>
                  {project.details}
                </p>

                {project.useTechnology.map((useTech) => (
                  <ul className="flex gap-x-2 mb-6" key={project.id}>
                    <li>
                      <img className="w-4" src={useTech.tech1} alt="" />
                    </li>
                    <li>
                      <img className="w-4" src={useTech.tech2} alt="" />
                    </li>
                    <li>
                      <img className="w-4" src={useTech.tech3} alt="" />
                    </li>
                    <li>
                      <img className="w-4" src={useTech.tech4} alt="" />
                    </li>
                  </ul>
                ))}

                <div className="flex gap-x-4">
                  {project.id === 2 ? (
                    <a href="#home" className={`${styles.viewProjectBtn} rounded-lg p-2 font-bold`}>Take a look</a>
                  ) : (
                    <button
                      onClick={() => handleOpenWebsite(project.urlWebsite)}
                      className={`${styles.viewProjectBtn} rounded-lg p-2 font-bold`}
                    >
                      Take a look
                    </button>
                  )}

                  <button
                    onClick={() => handleOpenRepo(project.urlRepo)}
                    className={`${styles.viewProjectBtn} rounded-lg p-2 font-bold`}
                  >
                    <FaGithub className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
