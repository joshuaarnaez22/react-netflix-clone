import React, { useEffect, useState } from 'react'
import { SignIn, SignUp } from '..'
import "./login.scss"
const Login = () => {
    const [signIn, setSignIn] = useState(0)
    useEffect(() => {},[signIn]) 
    
    return (
        <div className="login">
            <div className="login__screen">
            <img className="login__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" onClick={() => setSignIn(0)}/>
            <button onClick={() => setSignIn(2)} className="login_btn_sign">Sign in</button>
            <div className="login_gradient" />
            </div>

            <div className="login_body">
                {signIn === 1 ? (
                    <SignUp signIn={signIn} setSignIn={setSignIn}/>
                ) 
                 : signIn === 2 ? ( <SignUp signIn={signIn} setSignIn={setSignIn}/>)
                 : (
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, Cancet at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
               
                <div className="login_form">
                    <form>
                    <input 
                    type="email"
                    placeholder="Email Address"
                    />
                    <button onClick={()=>setSignIn(1)}>GET STARTED</button>
                    </form>
                </div>
                </>
                )}
            </div>
        </div>
    )
}

export default Login
