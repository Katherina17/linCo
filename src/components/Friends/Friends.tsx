import {UserType} from "../../redux/state";
import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";

type FriendsProps = {
    friends: UserType[];
}

export const Friends = (props: FriendsProps) => {
    return (
        <div className={s.friendsMainContainer} >
            <h2>Friends</h2>
            <div className={s.friendContainer}>
                {props.friends.map(friend => {
                    return (
                        <Friend key={friend.id} friend={friend}/>
                    )
                })}
            </div>
        </div>
    )
}