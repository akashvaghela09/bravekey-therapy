import styles from "./Services.module.css";
import IndividualTherapyImage from "../../assets/single.svg";
import GroupTherapyImage from "../../assets/group.svg";
import GlobalTherapyImage from "../../assets/global.svg";
import CoupleTherapyImage from "../../assets/couple.svg";

const Services = () => {
    return (
        <div id="services" className={styles.wrapper}>
            <div className={styles.space}/>
            <div className={styles.banner_wrapper}>
                <p className="text_xl">Personal, Convenient Therapy & Services to Help You Find Your Peace of Mind</p>
                <span>
                    <p>Mental Health Therapy for clients in the greater region of the Netherlands</p>
                    <p>(Services Offered Online Weekdays & Saturdays)</p>
                </span>
                <span className={styles.new_offer}>
                    <p><b>NEW :</b> BraveKey Coaching is Now Available Worldwide</p>
                </span>
            </div>
            <div className={styles.card_wrapper}>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={IndividualTherapyImage} alt="IndividualTherapy" className={styles.card_image} />
                    </div>
                    <p className={styles.card_title}>Individual Therapy</p>
                    <p className={styles.card_detail}>Feeling dull, despite working so hard? Ofter feel taken advantage? In face to face online counselling, we can talk through those issues.</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={GroupTherapyImage} alt="GroupTherapyImage" className={styles.card_image} />
                    </div>
                    <p className={styles.card_title}>Group Therapy</p>
                    <p className={styles.card_detail}>Here we confidentially address theraputic issues that are needed among a set of clients, such as anxiety, depression and relationship skills.</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={CoupleTherapyImage} alt="CoupleTherapyImage" className={styles.card_image} />
                    </div>
                    <p className={styles.card_title}>Couple's Therapy, Assessment & Coaching</p>
                    <p className={styles.card_detail}>Does your relationship need some recalibrating? Bravekey offers you help in re-relating with one another, using gottman methodology and Emotionally Focused Couples Therapy.</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={GlobalTherapyImage} alt="GlobalTherapyImage" className={styles.card_image} />
                    </div>
                    <p className={styles.card_title}>Online Therapy & Coaching Online</p>
                    <p className={styles.card_detail}>BraveKey Therapy gives you the option to schedule therapy conveniently over the internet. Great for people in more remote locations of the Netherlands or internationally around the world.</p>
                </div>
            </div>
        </div>);
};

export { Services };
