import s from '../Friends.module.css'
import {UserType} from "../../../redux/profileReducer";

type FriendPropsType = {
    friend: UserType;
}

export const Friend = (props: FriendPropsType) => {
    return(
        <div className={s.imgAndText}>
            <div className={s.image_container}>
                <img src={props.friend.imgSrc}
                alt={props.friend.name}/>
            </div>
            <span> {props.friend.name}</span>
        </div>
    )
}