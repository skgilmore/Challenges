export const LogIn = () => {

    const handleLogin = (e) => {
        e.preventDefault
        //check
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("whiteBoardUser", exits.id)
                    history.pushState("homepage")
                }
                else {
                    return "Please create an account"
                }
            })
    }

    return (
        <main className="container-login">
            <form>
                <h1>Please Sign In</h1>
                <input ref={email} type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                    required autoFocus />
                <button type="submit" >
                    login
                </button>
            </form>

        </main>
    )

}