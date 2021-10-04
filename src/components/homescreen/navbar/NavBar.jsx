import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import "./navbar.scss"
function NavBar() {
    const [show, handleShow] = useState(false)
    const history = useHistory()
    const transition_navBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transition_navBar);
        return () => window.removeEventListener("scroll", transition_navBar)
    },[])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav__contents">
            <img onClick={() => history.push("/")} className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img onClick={() => history.push("/profile")} className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="" />
            </div>
        </div>
    )
}

export default NavBar
