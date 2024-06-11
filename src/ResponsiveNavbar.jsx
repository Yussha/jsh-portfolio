import styles from "./styles.module.css";
export default function ResponsiveNavbar({
  showResponsiveNavbar,
  setShowResponsiveNavbar,
}) {
  return (
    <nav
      style={{ backgroundColor: "rgb(39, 39, 42)", transition: ".55s ease" }}
      className={`h-screen w-2/4 flex flex-col fixed  top-0  z-50 p-20 ${
        showResponsiveNavbar ? "right-0" : "-right-1/2"
      }`}
    >
      <div className="flex justify-end max-sm:text-xl max-sm:mb-8 mr:text-sm">
        <button onClick={() => setShowResponsiveNavbar(false)}>X</button>
      </div>
      <div className="mb-10">
        <ul className="flex flex-col items-center w-full gap-y-4">
          <li>
            <a
              onClick={() => setShowResponsiveNavbar(false)}
              href="#about"
              className="max-sm:text-2xl max-sm:font-bold mr:text-sm"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowResponsiveNavbar(false)}
              href="#service"
              className="max-sm:text-2xl max-sm:font-bold mr:text-sm"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowResponsiveNavbar(false)}
              href="#portfolio"
              className="max-sm:text-2xl max-sm:font-bold mr:text-sm"
            >
              PORTFOLIO
            </a>
          </li>
        </ul>
      </div>
      <div className={`flex flex-col items-center w-full`}>
        <a
          onClick={() => setShowResponsiveNavbar(false)}
          href="https://drive.google.com/file/d/1A7jI8MtziNWgBnG6SCnUtFviWF7iomE9/view"
          target="_blank"
          className={`${styles.btnBg} max-sm:text-2xl mr:text-sm rounded-full p-2`}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

//${styles.btnBg}
