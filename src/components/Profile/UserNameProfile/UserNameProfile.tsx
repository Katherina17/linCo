import React from "react";
import s from './UserNameProfile.module.css';
import {UserType, ProfileType} from '../../../redux/state';

type UserNameProfileProps = {
    imgSrc: string;
    userName: string;
    dateBirth: string;
    city: string;
    education: string;
}

const UserNameProfile = (props: UserNameProfileProps) => {
    return(
        <div className={s.User_name_profile_container}>
            <div className={s.image_container}>
                <img src={props.imgSrc} alt="user image"/>
            </div>
            <div className={s.user_description}>
                <h1>{props.userName}</h1>
                <span> Date of Birth: {props.dateBirth}</span>
                <span> City: {props.city}</span>
                <span> Education: {props.education}</span>
            </div>
        </div>
    )
}

export default UserNameProfile;