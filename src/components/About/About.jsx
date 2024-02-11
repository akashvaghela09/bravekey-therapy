import React from 'react';
import styles from "./About.module.css";
import User from "../../assets/user.png";

const About = () => {
    return (
        <div id="about" className={styles.container}>
            <div className={styles.content_wrapper}>
                <div className={styles.text_wrapper}>
                    <p className='text_xl'>About</p>
                    <div className={styles.image_wrapper_small}>
                        <img src={User} alt="User" className={styles.user} />
                    </div>
                    <p>I grew up in Dallas, Texas USA and I have been living in The Netherlands for over 8 years now. Seven years ago I began a career change to transition into the field of psychology. I'm grateful to offer therapy services to clients in the English language at convenient times, like Saturdays, and Online. My practice, BraveKey Therapy is focused on providing you a personalized and professional psychotherapy experience to help you overcome life's challenges and emotional distress. Although, I've gained a conversational level of Dutch and work daily to improve my language further, I prefer to work with clients only in the English language!</p>
                </div>
                <div className={styles.text_wrapper}>
                    <p className={styles.title}>My Style</p>
                    <p>My therapeutic approach is <span className={styles.highlight}> collaborative </span>, transparent, semi-structured and warm. I am here to <span className={styles.highlight}> listen </span> and to help <span className={styles.highlight}> guide </span> you, using psychological techniques. <span className={styles.highlight}> Together </span> we will use our time in session to determine what <span className={styles.highlight}> works for you </span>, along your individualized therapeutic journey.  </p>
                </div>
                <div className={styles.text_wrapper}>
                    <p className={styles.title}>Haroun Busby, MA</p>
                    <p>BraveKey Therapy, <br />
                        Intercultural Clinical Psychologist and Coach <br />
                        NIP Registration: 228215
                    </p>
                </div>
            </div>
            <div className={styles.image_wrapper}>
                <img src={User} alt="User" className={styles.user} />
            </div>
        </div>
    )
}

export { About }
