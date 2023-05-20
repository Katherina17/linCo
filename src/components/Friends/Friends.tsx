import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {users, UserType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {withAuthRedirect} from "components/hoc/WithAuthRedirect";


const Friends = (props: mapStateToProps) => {
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

const mapStateToProps = ():mapStateToProps => {
    return {
        friends: users
    }
}

export const FriendContainer = connect(mapStateToProps)(Friends)

export default compose<React.ComponentType>(connect(mapStateToProps, null), withAuthRedirect
)(Friends)
