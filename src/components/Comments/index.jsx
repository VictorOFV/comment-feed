import styles from "./styles.module.scss"
import avatar from "../../assets/avatar.png"

function Comments({ email, content, id }) {
    const date = new Date(id).toLocaleDateString()
    const hours = new Date(id).toLocaleTimeString()
    const dateAndHours = `${date} ás ${hours}`

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img src={avatar} alt="Avatar" />
                <div>
                    <h3>{email}</h3>
                    <p>{dateAndHours}</p>
                </div>
            </div>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Comments