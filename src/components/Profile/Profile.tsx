import s from "./Profile.module.css";
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";
import {mapStateToPropsType} from "./ProfileC";
import {UserProfile} from "../../redux/profileReducer";
import userPhoto from '../../assets/user.png'

type ProfilePropsType = {
    userProfile: UserProfile | null;
    owner: boolean,
    updateOwnerPhotoThunk: (file: File) => void
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
                                 status={props.status}
                                 owner={props.owner}
                                 updateOwnerPhotoThunk={props.updateOwnerPhotoThunk}
                />
                { props.owner && <MyPostsContainer/>}
            </main>
        }
        else {
            return(
                <main className={s.main_container}>
                    <p> not found</p>
                </main>
            )
    }
}