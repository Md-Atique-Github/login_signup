import React, { useState } from 'react'
import "./Loginform.css"
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext'
import { Alert } from 'react-bootstrap'

const Loginform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { logIn, googleSignIn } = useUserAuth();

    function toSignup() {
        navigate("/signup");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home")
        } catch (err) {
            setError(err.message);
        }
    }
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    }
    return (

        <div>
            <form className='uu' onSubmit={handleSubmit}>

                <div className="signin">
                    <div className="content">

                        <h2>Sign In</h2>
                        {error && <Alert variant='danger' style={{ marginLeft: 45, color: "red", marginTop: -30 }}>{error}</Alert>}
                        <div className="form">

                            <div className="inputBox">
                                <input type="text" required onChange={(e) => { setEmail(e.target.value) }} /> <i>Email</i>
                            </div>

                            <div className="inputBox">
                                <input type="password" required onChange={(e) => { setPassword(e.target.value) }} /> <i>Password</i>
                            </div>

                            <div className="links" onClick={toSignup}>
                                <a href="#" >Forgot Password</a> <a href="#">Signup</a>
                            </div>

                            <button className="inp-btn"> Login</button>

                            <GoogleButton onClick={handleGoogleSignIn} className='g-btn'>Login with Google</GoogleButton>

                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Loginform


