import styles from "./styles.module.scss";

function ContentInput({ content, setContent }) {
    return (
        <div>
            <label className={styles.label} htmlFor="content">Comentário</label>
            <textarea
            className={styles.textarea}
            name="content" 
            id="content" 
            value={content} 
            onChange={setContent}
            >
            </textarea>
        </div>
    )
}

export default ContentInput