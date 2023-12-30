import { useState } from "react"

function useComment() {
    const [comments, setComments] = useState([])

    function addComment({ email, content }) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email || !content) return
        if (!regexEmail.test(email)) return

        setComments(state => {
            const id = Date.now()
            return [{ email, id, content }, ...state]
        })
    }

    return { comments, addComment }
}

export default useComment