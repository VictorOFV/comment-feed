import FormComment from "./components/FormComment"
import styles from "./styles/app.module.scss"
import Comments from "./components/Comments"
import useComment from "./hooks/useComment"

function App() {
  const { comments, addComment } = useComment()

  return (
    <div className={styles.app}>
      <FormComment addComment={addComment} />
      <div className={styles.commentsContainer}>
        {comments.map(({ email, content, id }) => (
          <Comments
            key={id}
            content={content}
            email={email}
            id={id}
          />
        ))}
      </div>
    </div>
  )
}

export default App
