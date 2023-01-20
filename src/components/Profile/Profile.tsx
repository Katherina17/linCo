import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {ActionType, commonActionTypes, ProfileType} from '../../redux/state';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    profile: ProfileType
    dispatch: (action: commonActionTypes) => void;
    newPostText: string;
}

const Profile = (props: ProfilePropsType) => {
    return(
        <main className={s.main_container}>
            <UserNameProfile imgSrc={props.profile.user.imgSrc}
                            userName={props.profile.user.name}
                            city={props.profile.city}
                            dateBirth={props.profile.dataBirth}
                            education={props.profile.education}/>
            <MyPosts posts={props.profile.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}/>
        </main>
    )
}

export default Profile;