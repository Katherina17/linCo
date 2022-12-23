import React from "react";
import s from './Profile.module.css';
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import MyPosts, {MyPostType} from "./MyPosts/MyPosts";

const Profile = () => {
    const postData: MyPostType[] = [{
        id: 1, like: 10, message: 'hello, it\'s my first time to build an application'
    },
        {
            id: 2, like: 25, message: 'Today we do nothing'
        },
        {
            id: 3, like: 2, message: 'Do u like spending your free time doing something useful?'
        },];
    return(
        <main className={s.main_container}>
            <UserNameProfile/>
            <MyPosts postData={postData}/>
        </main>
    )
}

export default Profile;