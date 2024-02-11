import styles from "./Quote.module.css";

const Quote = () => {
    return (
        <div className={styles.divider_wrapper}>
            <div className={styles.strock_line} />
            <p className="text_md">BE BRAVE, SEEK THERAPY.</p>
            <div className={styles.strock_line} />
        </div>
    )
}

export { Quote }