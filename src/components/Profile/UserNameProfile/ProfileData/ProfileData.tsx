import React from "react";
import s from '../UserNameProfile.module.css'


type ProfileDataType = {
    isLookingAJob?:null | boolean
    descJob?: null | string
    github?: null| string;
    facebook?: null | string;
    insta?: null | string;
    vk?: null | string
    aboutMe?: string | null
}

export const ProfileData = (props: ProfileDataType) => {
    return (
        <div className={s.user_description}>
            {props.aboutMe && <span> About me: {props.aboutMe} </span>}
            {props.isLookingAJob && <span> is looking a job? {props.isLookingAJob ? 'yes' : 'no'}</span>}
            {props.descJob && <span> Description for a job: {props.descJob}</span>}
            {props.facebook && <span> Contacts: {props.facebook}</span>}
            {props.insta && <span> Contacts: {props.insta}</span>}
            {props.github && <span> Contacts: {props.github}</span>}
            {props.vk && <span> Contacts: {props.vk}</span>}
        </div>
    )
}