import React from 'react'
import Header from './Header'
// import {Link} from 'react-router-dom'
function Signup() {
    return (
        <div>
            <Header content="Welcome To Vocab !" search={false}/>
            <div className="main_container">
            <div className="main_wrapper">
                <form className="login-form">
                    <div className="input_container">
                    <input type="text" placeholder="First Name" className="input_field"/>
                    </div>
                    <div className="input_container">
                    <input type="text" placeholder="Last Name" className="input_field"/>
                    </div>
                    <div className="input_container">
                    <input type="text" placeholder="Email" className="input_field"/>
                    </div>
                    <div className="input_container">
                    <input type="text" placeholder="username" className="input_field"/>
                    </div>
                    <div className="input_container">
                    <input type="password" placeholder="password" className="input_field"/>
                    </div>
                    <div className="input_container">
                    <button type="submit" className="log-btn">SignUp</button>
                    </div>
                    <div style={{marginTop:'10px',fontSize:'16px',padding:'10px'}}>
                        <a href ="#">
                            Don't have an account?
                        </a>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Signup
