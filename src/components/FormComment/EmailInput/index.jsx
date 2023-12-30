function EmailInput({ email, setEmail }) {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input
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