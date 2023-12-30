import styles from "./styles.module.scss";

function EmailInput({ email, setEmail }) {
    return (
        <div>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={setEmail}
            />
        </div>
    )
}

export default EmailInput