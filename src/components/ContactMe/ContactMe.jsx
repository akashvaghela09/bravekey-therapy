import styles from "./ContactMe.module.css";
import { FaLocationDot } from "react-icons/fa6";
import ContactImage from "../../assets/contact.jpg";
import { IoMdCall, IoMdMail } from "react-icons/io";

const ContactMe = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.section_wrapper}>
				<div className={styles.contact_image_wrapper}>
					<img src={ContactImage} alt="contact me" className={styles.contact_image} />
				</div>
				<div className={styles.content_wrapper}>
					<span className={styles.text_wrapper}>
						<p className="text_xl">Free Consultation</p>
						<p>
							Considering whether therapy is right for you? <br /> Let's have a
							free 15 minute phone consultation
						</p>
					</span>
				</div>
			</div>

			<div id="contact_me" className={styles.section_wrapper}>
				<div className={styles.content_wrapper}>
					<span className={styles.text_wrapper}>
						<p className="text_xl">Locations Served</p>
						<p>
							Serving Clients across the Netherlands
						</p>
						<div className={styles.location_names}>
							<span className={styles.location_name_wrapper}>
								<FaLocationDot className={styles.marker_color} />
								<p>Amsterdam</p>
							</span>
							<span className={styles.location_name_wrapper}>
								<FaLocationDot className={styles.marker_color} />
								<p>Rotterdam</p>
							</span>
							<span className={styles.location_name_wrapper}>
								<FaLocationDot className={styles.marker_color} />
								<p>Groningen</p>
							</span>
							<span className={styles.location_name_wrapper}>
								<FaLocationDot className={styles.marker_color} />
								<p>The Hague</p>
							</span>
							<span className={styles.location_name_wrapper}>
								<FaLocationDot className={styles.marker_color} />
								<p>Utrecht</p>
							</span>
							<span className={styles.location_name_wrapper}>
								<FaLocationDot className={styles.marker_color} />
								<p>Eindhoven</p>
							</span>
						</div>
					</span>
				</div>
				<div className={styles.content_wrapper}>

					<div className={styles.text_wrapper}>
						<p className="text_xl">Contact Me</p>
						<p>Bravekey Therapy and Coaching is now officially offering <br /> personal developmental coaching worldwide!</p>
						<div className={styles.contact_wrapper}>
							<span className={styles.title_wrapper}>
								<IoMdMail className={styles.contact_marker} />
								<p className={styles.contact_title}>Email</p>
							</span>
							<p className={styles.contact_data}>contact@bravekeytherapy.nl</p>
						</div>

						<div className={styles.contact_wrapper}>
							<span className={styles.title_wrapper}>
								<IoMdCall className={styles.contact_marker} />
								<p className={styles.contact_title}>Call</p>
							</span>
							<p className={styles.contact_data}>+31(0) 6400 26318</p>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export { ContactMe };
