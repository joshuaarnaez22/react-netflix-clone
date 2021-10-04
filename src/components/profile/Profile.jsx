import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from '..'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import "./profile.scss"

const Profile = () => {
    const user = useSelector(selectUser)
    return (
        <div className="profile">
            <NavBar/>
            <div className="profile__screen__body">
                <h1 className="payment">Note: Payment method is not implemented</h1>
                <h1 className="payment">Reason: Problem in firebase billing proccess</h1>
                <h1 className="edit__profile_text">Edit Profile</h1>
                <div className="profile__info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="" />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <h3>Plans</h3>
                            <p>Renewal date : 09/21/21</p>
                            <button onClick={() => auth.signOut()} className="profile__signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
