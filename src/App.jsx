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
        <h2>Comentários</h2>
        <hr />
        {comments.length > 0 ?
          (comments.map(({ email, content, id }) => (
            <Comments
              key={id}
              content={content}
              email={email}
              id={id}
            />
          )))
          : (<h2>Seja o primeiro a comentar!!</h2>)}
      </div>
    </div>
  )
}

export default App
