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
            {props.aboutMe && <span> <b> About me: </b> {props.aboutMe} </span>}
            {props.isLookingAJob && <span> <b> is looking a job? </b>{props.isLookingAJob ? 'yes' : 'no'}</span>}
            {props.descJob && <span> <b> Description for a job: </b> {props.descJob}</span>}
            {props.facebook && <span> <b> Contacts: </b> {props.facebook}</span>}
            {props.insta && <span> <b> Contacts</b>: {props.insta}</span>}
            {props.github && <span> <b> Contacts:</b> {props.github}</span>}
            {props.vk && <span> <b> Contacts: </b> {props.vk}</span>}
        </div>
    )
}