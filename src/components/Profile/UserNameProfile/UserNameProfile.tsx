import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import s from './UserNameProfile.module.css';
import {ProfileStatusContainer} from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../assets/user.png";
import { UserProfile} from "../../../redux/profileReducer";
import {
    ProfileFormDataContainer
} from "./ProfileData/ProfileFormData/ProfileFormData";
import {ProfileData} from "./ProfileData/ProfileData";
import {ModalWindow} from '../../../features/ModalWindow/ModalWindow';
import EditIcon from '@mui/icons-material/Edit';
import {Button} from "../../Button/Button"

type UserNameProfileProps = {
    userProfile: UserProfile | null
    status: string;
    owner: boolean
    updateOwnerPhotoThunk: (file: File) => void
    updateProfileInfoThunk: (userProfile:  UserProfile  ) =>  Promise<ErrorConstructor>

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
    const onSubmitHandler = (profileData: UserProfile) => {
        props.updateProfileInfoThunk(profileData).then(() => {
            setEditMode(false)
        })
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
                {props.owner && !editMode
                    &&
                    <Button name={'Edit Page'} callBack={() => setEditMode(true)} className={s.editBtn}>
                        <EditIcon sx={{ fontSize: 14, marginLeft: '5px'}}/>
                    </Button>}

                { editMode && <ModalWindow isActive={editMode} closed={() => setEditMode(false)}>
                    <div className={s.editFormContainer}>
                        <ProfileFormDataContainer onSubmit={onSubmitHandler} initialValues={props.userProfile!}/>
                    </div>
                </ModalWindow>}
            </div>
        </div>
    )
}

export default UserNameProfile;



