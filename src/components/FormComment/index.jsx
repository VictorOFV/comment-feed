import { useState } from "react"
import Button from "../Button"
import styles from "./styles.module.scss"
import ContentInput from "./ContentInput"
import EmailInput from "./EmailInput"

function FormComment({ addComment }) {
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addComment({ email, content })
        setEmail("")
        setContent("")
    }

    return (
        <form className={styles.formComment}>
            <h2>Seção de Comentários</h2>
            <EmailInput email={email} setEmail={(ev) => setEmail(ev.target.value)} />
            <ContentInput content={content} setContent={(ev) => setContent(ev.target.value)} />
            <Button type={"submit"} text={"Enviar Comentário"} onClick={handleSubmit} />
        </form>
    )
}

export default FormComment