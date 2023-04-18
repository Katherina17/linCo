import React, {ChangeEvent} from "react";
import s from './UserNameProfile.module.css';
import {ProfileStatus, ProfileStatusContainer} from "./ProfileStatus/ProfileStatus";

type UserNameProfileProps = {
    imgSrc: string;
    userName: string;
    dateBirth?: string;
    city?: string;
    education?: string;
    isLookingAJob?:null | boolean
    descJob?: null | string
    github?: null| string;
    facebook?: null | string;
    insta?: null | string;
    status: string;
    owner: boolean
    updateOwnerPhotoThunk: (file: File) => void
}

const UserNameProfile = (props: UserNameProfileProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files as FileList;
        props.updateOwnerPhotoThunk(selectedFiles?.[0])
    }

    return(
        <div className={s.User_name_profile_container}>
            <div className={s.image_container}>
                <img src={props.imgSrc} alt="user image"/>
            </div>
            {props.owner && <input type={'file'} onChange={onChangeHandler}/>}
            <div className={s.user_description}>
                <h1>{props.userName}</h1>
                <ProfileStatusContainer/>
                {props.isLookingAJob && <span> is looking a job? {props.isLookingAJob ? 'yes' : 'no'}</span>}
                {props.descJob && <span> Description for a job: {props.descJob}</span>}
                {props.facebook && <span> Contacts: {props.facebook}</span>}
                {props.insta && <span> Contacts: {props.insta}</span>}
                {props.github && <span> Contacts: {props.github}</span>}
                {props.dateBirth && <span> Date of Birth: {props.dateBirth}</span>}
                {props.city && <span> City: {props.city}</span>}
                {props.education && <span> Education: {props.education}</span>}
            </div>
        </div>
    )
}

export default UserNameProfile;