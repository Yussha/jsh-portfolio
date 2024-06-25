import { FaRegMessage } from "react-icons/fa6";
import styles from "./styles.module.css";

export default function ContactBtn({ handleShowContactModal }) {
  return (
    <button
      onClick={handleShowContactModal}
      className={`${styles.btnBg} rounded-full fixed bottom-10 mr:right-3 sm:right-12 p-4`}
    >
      <FaRegMessage className="text-xl" />
    </button>
  );
}
