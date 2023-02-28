import s from "./Profile.module.css";
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";
import {mapStateToPropsType} from "./ProfileC";
import {UserProfile} from "../../redux/profileReducer";
import userPhoto from '../../assets/user.png'
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    userProfile: UserProfile | null
} & mapStateToPropsType

export const Profile = (props: ProfilePropsType) => {
        if(props.userProfile !== null) {
            return <main className={s.main_container}>
                <UserNameProfile imgSrc={props.userProfile.photos.large === null ? userPhoto : props.userProfile.photos.large}
                                 userName={props.userProfile.fullName}
                                 isLookingAJob={props.userProfile.lookingForAJob}
                                 descJob = {props.userProfile.lookingForAJobDescription}
                                 github = {props.userProfile.contacts.github}
                                 insta = {props.userProfile.contacts.instagram}
                                 facebook = {props.userProfile.contacts.facebook}
                />
            </main>
        }
        else {
            return(
                <main className={s.main_container}>
                    <UserNameProfile imgSrc={props.imgStr}
                                     userName={props.userName}
                                     city={props.city}
                                     dateBirth={props.dateBirth}
                                     education={props.education}/>
                    <MyPostsContainer/>
                </main>
            )
    }
}