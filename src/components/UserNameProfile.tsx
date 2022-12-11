import React from "react";
import s from './UserNameProfile.module.css';

const UserNameProfile = () => {
    return(
        <div className={s.User_name_profile_container}>
            <div className={s.image_container}>
                <img src="https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="user image"/>
            </div>
            <div className={s.user_description}>
                <h1>Emilia Osten</h1>
                <span> Date of Birth: 17 June</span>
                <span> City: Minsk</span>
                <span> Education: BSU</span>
            </div>
        </div>
    )
}

export default UserNameProfile;