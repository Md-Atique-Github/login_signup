import React, { useState } from 'react'
import "./Signupform.css"
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import { Alert } from 'react-bootstrap'

const Signupform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signUp } = useUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/")
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className='second_body'>
            <div className="main">
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        {error && <Alert variant='danger' style={{ marginLeft: 45, color: "red", marginTop: -30 }}>{error}</Alert>}
                        <input className="signup-input" type="text" name="txt" placeholder="User name" required="" onChange={(e) => { setUser(e.target.value) }} />
                        <input className="signup-input" type="email" name="email" placeholder="Email" required="" onChange={(e) => { setEmail(e.target.value) }} />
                        <input className="signup-input" type="password" name="pswd" placeholder="Password" required="" onChange={(e) => { setPassword(e.target.value) }} />
                        <button className='btn1'>Sign up</button>
                        <Link to="/" className='go_login'>login here</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signupform

