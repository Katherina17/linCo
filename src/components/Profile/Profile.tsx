import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import MyPosts, {MyPostType} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    postData: MyPostType[];
}

const Profile = (props: ProfilePropsType) => {
    return(
        <main className={s.main_container}>
            <UserNameProfile/>
            <MyPosts postData={props.postData}/>
        </main>
    )
}

export default Profile;