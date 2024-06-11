import styles from "./layouts.module.css";
export default function Hero() {
  return (
    <section
      id="home"
      className={`${styles.hero} sm:pt-44 sm:h-auto sm:pb-12 sm:pl-12 md:pt-52 lg:pt-52 xl:pl-40 xl:pr-40 mr:h-auto mr:pt-36 mr:pl-8 mr:pr-8 mr:pb-10 md:pb-28 lg:pb-36 xl:pb-36`}
    >
      <div className={`${styles.content} mr:w-72 sm:w-full `}>
        <h5
          className={`font-bold mb-3 mr:text-2xl sm:text-3xl sm:w-full md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl md:w-full`}
        >
          Good Day 👋 I'm Joshua
        </h5>
        <h1
          className={` font-bold mb-5  mr:text-2xl md:w-full lg:w-full sm:text-3xl sm:w-full md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl`}
        >
          <span className={styles.highlight}>FrontEnd Developer</span> in the
          Philippines{" "}
        </h1>
        <p
          className="mr:leading-8 sm:w-full md:w-full lg:w-full xl:w-3/4 2xl:w-3/4"
          style={{ color: "rgb(161 161 170" }}
        >
          Meet Joshua Bolasa, a front-end developer passionate about creating
          exceptional digital experiences. With expertise in HTML, CSS, and
          JavaScript, Joshua brings designs to life, crafting visually appealing
          and user-friendly websites that leave a lasting impact.
        </p>
      </div>
    </section>
  );
}
