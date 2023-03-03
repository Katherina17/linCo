import React from "react";
import s from './UserNameProfile.module.css';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

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
    changeUserStatusAC: (status: string) => void
}

const UserNameProfile = (props: UserNameProfileProps) => {
    return(
        <div className={s.User_name_profile_container}>
            <div className={s.image_container}>
                <img src={props.imgSrc} alt="user image"/>
            </div>
            <div className={s.user_description}>
                <h1>{props.userName}</h1>
                <ProfileStatus status={props.status} changeUserStatusAC={props.changeUserStatusAC}/>
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