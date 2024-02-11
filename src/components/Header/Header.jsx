import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { CTAButton } from "../CTAButton/CTAButton";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={Logo} alt="Therapy Logo" className={styles.logo} />
      </div>
      <div className={styles.link_wrapper}>
        {/* <p className={styles.link}>Home</p> */}
        <p className={styles.link}>Services</p>
        {/* <p className={styles.link}>Contact Me</p> */}
        <CTAButton />
      </div>
    </div>
  );
};

export { Header };
