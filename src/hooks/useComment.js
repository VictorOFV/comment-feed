import { useState } from "react"

function useComment() {
    const [comments, setComments] = useState([])

    function addComment({ email, content }) {

        if (!email || !content) return

        setComments(state => {
            const id = Date.now()
            return [...state, { email, id, content }]
        })
    }

    return { comments, addComment }
}

export default useComment