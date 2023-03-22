import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {UserType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";


export const Friends = (props: mapStateToProps) => {
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

type mapStateToProps = {
    friends: UserType[]
}

const mapStateToProps = (state: RootState):mapStateToProps => {
    return {
        friends: state.profile.user.friends
    }
}

export const FriendContainer = connect(mapStateToProps)(Friends)



