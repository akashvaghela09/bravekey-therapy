import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { CTAButton } from "../CTAButton/CTAButton";

const Header = ({ handleScroll }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={Logo} alt="Therapy Logo" className={styles.logo} />
      </div>
      <div className={styles.link_wrapper}>
        <p onClick={() => handleScroll("services")} className={styles.link}>Services</p>
        <p onClick={() => handleScroll("about")} className={styles.link}>About</p>
        <p onClick={() => handleScroll("contact_me")} className={styles.link}>Contact Me</p>
        <CTAButton />
      </div>
    </div>
  );
};

export { Header };
