import React from 'react'
import "./Loginform.css"
import { useNavigate } from 'react-router-dom';

const Loginform = () => {

    const nav = useNavigate();

    function toSignup() {
        nav("/signup");
    }
    return (
        <div>
            <section>

                <div className="signin">

                    <div className="content">

                        <h2>Sign In</h2>

                        <div className="form">

                            <div className="inputBox">

                                <input type="text" required /> <i>Username</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" required /> <i>Password</i>

                            </div>

                            <div className="links" onClick={toSignup}> <a href="#" >Forgot Password</a> <a href="#">Signup</a>

                            </div>

                            <button className="inp-btn"> Login</button>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Loginform