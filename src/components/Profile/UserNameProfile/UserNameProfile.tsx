import React, {ChangeEvent, useRef, useState, MouseEvent} from "react";
import s from './UserNameProfile.module.css';
import {ProfileStatusContainer} from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../assets/user.png";
import { UserProfile} from "../../../redux/profileReducer";
import {
    ProfileFormDataContainer, ProfileFormDataType
} from "./ProfileData/ProfileFormData/ProfileFormData";
import {ProfileData} from "./ProfileData/ProfileData";

type UserNameProfileProps = {
    userProfile: UserProfile | null
    status: string;
    owner: boolean
    updateOwnerPhotoThunk: (file: File) => void
    updateProfileInfoThunk: (userProfile:  UserProfile  ) => void

}

const UserNameProfile = (props: UserNameProfileProps) => {
    const[editMode, setEditMode] = useState(false);
    let hiddenFileInput = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files as FileList;
        props.updateOwnerPhotoThunk(selectedFiles?.[0])
    }

    const handleClick = () => {
        if(hiddenFileInput.current !== null){
            hiddenFileInput.current.click();
        }
    };

    const onSubmitHandler = (profileData:  UserProfile) => {
        props.updateProfileInfoThunk(profileData)
        setEditMode(false)
    }

    return(
        <div className={s.User_name_profile_container}>
            <div className={s.image_container} onClick={() => handleClick()}>
                <img src={props.userProfile?.photos.large === null ? userPhoto : props.userProfile?.photos.large} alt="user image"/>
                {props.owner && <input type={'file'}
                                       onChange={onChangeHandler}
                                       ref={hiddenFileInput}
                                       className={s.choosePhotoContainer}
                /> }
            </div>

            <div className={s.user_description}>
                <h1>{props.userProfile?.fullName}</h1>
                <ProfileStatusContainer/>
                <ProfileData github={props.userProfile?.contacts.github}
                             facebook={props.userProfile?.contacts.facebook}
                             insta={props.userProfile?.contacts.instagram}
                             vk={props.userProfile?.contacts.vk}
                             descJob={props.userProfile?.lookingForAJobDescription}
                             isLookingAJob={props.userProfile?.lookingForAJob}
                             aboutMe={props.userProfile?.aboutMe}
                />
                {props.owner && !editMode && <button onClick={() => setEditMode(true)}> Edit Page </button>}
                {props.owner && editMode && <ProfileFormDataContainer onSubmit={onSubmitHandler} initialValues={props.userProfile!}/>}
            </div>
        </div>
    )
}

export default UserNameProfile;

/*
*/


