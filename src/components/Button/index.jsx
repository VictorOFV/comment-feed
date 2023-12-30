import styles from "./styles.module.scss"

function Button({ text, onClick, type }) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
            >
            {text}
        </button>
    )
}

export default Button