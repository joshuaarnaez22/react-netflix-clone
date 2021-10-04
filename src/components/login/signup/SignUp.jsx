import React, {useRef } from 'react'
import "./signup.scss"
import {auth} from '../../../firebase'
const SignUp = ({signIn,setSignIn}) => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    // const [isSignin, setIsSignin] = useState(false)


    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            alert('User created successfully.')
        }).catch(error => 
            alert('User dont exist.')
        )
    }
    const signin = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser) => {
                console.log(authUser);
            }).catch(error => alert(error.message))
    }
    return (
        <div>
            {signIn === 1 ? (
            <div className="signup">
            <form onSubmit={register}>
                <h2 className="sign">Sign Up</h2>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef}  type="password" placeholder="Password" />
                <button type="submit">Register now</button>
                <h3>
                    <span className="new__to__netflix">Already have an account? </span>
                    <span className="underline" onClick={() =>(setSignIn(2))}>
                    Sign in now.
                    </span>
                </h3>
            </form>
        </div>
        ) :
            <div className="signup">
            <form onSubmit={signin}>
            <h2 className="sign">Sign In</h2>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef}  type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <h3>
                <span className="new__to__netflix">Don't have an account? </span>
                <span className="underline" onClick={() =>setSignIn(1)}>
                Sign up now.
                </span>
            </h3>
        </form>
       </div>
       
        }
        </div>
    )
}

export default SignUp
