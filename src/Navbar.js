const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome To Pomodoro App</h1>
            <div className="links">
                <a href="/how?">How To Pomodoro ?</a>
                <a href="/account" style={{
                    backgroundColor : "#3782e4",
                    color: "white",
                    borderRadius : "8px"
                }}>Log In To Your Pomodoro Account</a>
            </div>
        </nav>
    );
}

export default Navbar;