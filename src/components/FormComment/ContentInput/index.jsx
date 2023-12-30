function ContentInput({ content, setContent }) {
    return (
        <div>
            <label htmlFor="content">Comentário</label>
            <textarea 
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