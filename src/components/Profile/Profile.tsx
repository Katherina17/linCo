import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {ProfileType} from '../../redux/state';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    profile: ProfileType
    addPost: (title: string) => void;
}

const Profile = (props: ProfilePropsType) => {
    return(
        <main className={s.main_container}>
            <UserNameProfile imgSrc={props.profile.user.imgSrc}
                            userName={props.profile.user.name}
                            city={props.profile.city}
                            dateBirth={props.profile.dataBirth}
                            education={props.profile.education}/>
            <MyPosts posts={props.profile.posts} addPost={props.addPost}/>
        </main>
    )
}

export default Profile;