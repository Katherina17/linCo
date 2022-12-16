import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={s.main_container}>
            <UserNameProfile/>
            <MyPosts/>
        </div>
    )
}

export default Profile;