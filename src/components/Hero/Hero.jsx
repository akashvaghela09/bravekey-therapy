import styles from "./Hero.module.css";
import TherapyImage from "../../assets/therapy-clear.png";
import BlurBlob from "../../assets/blob.svg";
import HeroBlob from "../../assets/blob3.svg";
import { CTAButton } from "../CTAButton/CTAButton";

const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.hero_wrapper}>
				<img src={BlurBlob} alt="Blur Blob" className={styles.blur_blob} />
				<p className="text_xl">
					Life can have Barriers... <br /> Being an Expat can have more
				</p>
				<p className="text_sm">
					Feeling stuck but not sure what to do? <br /> I'm here to listen,
					understand and support you with new coping.{" "}
				</p>
				<div className={styles.cta_button_wrapper}>
					<p className="text_lg">BraveKey Therapy is Online now</p>
					<CTAButton />
				</div>
			</div>

			{/* hero illustration */}
			<div className={styles.image_wrapper}>
				<img src={HeroBlob} alt="Blob Image" className={styles.blob_image} />
				<div className={styles.modal_wrapper}>
					<img
						src={TherapyImage}
						alt="Hero Image"
						className={styles.hero_image}
					/>
				</div>
			</div>
		</div>
	);
};

export { Hero };
