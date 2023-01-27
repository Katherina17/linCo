import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
}


const Profile = (props: ProfilePropsType) => {
    return(
        <main className={s.main_container}>
            <UserNameProfile imgSrc={props.profile.user.imgSrc}
                            userName={props.profile.user.name}
                            city={props.profile.city}
                            dateBirth={props.profile.dataBirth}
                            education={props.profile.education}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile;