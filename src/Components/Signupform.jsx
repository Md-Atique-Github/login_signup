import React from 'react'
import "./Signupform.css"
import { Link } from 'react-router-dom'

const Signupform = () => {
    return (
        <div className='second_body'>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input className="signup-input" type="text" name="txt" placeholder="User name" required="" />
                        <input className="signup-input" type="email" name="email" placeholder="Email" required="" />
                        <input className="signup-input" type="password" name="pswd" placeholder="Password" required="" />
                        <button className='btn1'>Sign up</button>
                        <Link to="/" className='go_login'>login here</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signupform