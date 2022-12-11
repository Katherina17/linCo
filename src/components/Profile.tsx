import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile";

const Profile = () => {
    return(
        <div className={s.main_container}>
            <UserNameProfile/>
            <h2>My posts</h2>
            <p>New post</p>
            <p>post1</p>
            <p>post2</p>
        </div>
    )
}

export default Profile;