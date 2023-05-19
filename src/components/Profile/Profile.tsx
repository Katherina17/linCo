import s from "./Profile.module.css";
import UserNameProfile from "./UserNameProfile/UserNameProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";
import {mapStateToPropsType} from "./ProfileC";
import {UserProfile} from "../../redux/profileReducer";

type ProfilePropsType = {
    userProfile: UserProfile | null;
    owner: boolean,
    updateOwnerPhotoThunk: (file: File) => void
    updateProfileInfoThunk: (userProfile:  UserProfile  ) =>  Promise<ErrorConstructor>
} & mapStateToPropsType

export const Profile = (props: ProfilePropsType) => {
        if(props.userProfile !== null) {
            return <main className={s.main_container}>
                <UserNameProfile userProfile={props.userProfile}
                                 status={props.status}
                                 owner={props.owner}
                                 updateOwnerPhotoThunk={props.updateOwnerPhotoThunk}
                                 updateProfileInfoThunk={props.updateProfileInfoThunk}
                                 error={props.error}

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