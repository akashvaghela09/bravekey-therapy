import styles from "./CTAButton.module.css";

const CTAButton = () => {

	return (
		<a className={styles.meeting_link} href="https://bravekeytherapy.simplybook.it/v2/" target="_blank" rel="noopener noreferrer">
			Book Now
		</a>
	)
};

export { CTAButton };
