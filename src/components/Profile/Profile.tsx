import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {commonActionTypes, DialogsType, ProfileType} from '../../redux/state';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";

type ProfilePropsType = {
    profile: ProfileType
    store: Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes>;
}

const Profile = (props: ProfilePropsType) => {
    return(
        <main className={s.main_container}>
            <UserNameProfile imgSrc={props.profile.user.imgSrc}
                            userName={props.profile.user.name}
                            city={props.profile.city}
                            dateBirth={props.profile.dataBirth}
                            education={props.profile.education}/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}

export default Profile;