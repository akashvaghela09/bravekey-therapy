import styles from "./Footer.module.css";
import { FaRegCopyright } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <FaRegCopyright />
      <p className={styles.footer_text}>Copyright 2018 - 2024</p>
      <BsDot />
      <p className={styles.footer_text}>Bravekey Therapy</p>
    </div>
  );
};

export { Footer };