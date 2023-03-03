import React from "react";
import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {changeUserStatusAC, getProfileUserThunk, setUserProfile, UserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileCType = {
    setUserProfile: (user: UserProfile | null, isUserProfile: boolean) => void,
    getProfileUserThunk: (userID: string) => void
    changeUserStatusAC: (status: string) => void
} & mapStateToPropsType & RouteComponentProps<PathParam>;


type PathParam = {
    userID: string
}


export class ProfileC extends React.Component<ProfileCType>{
    checkAndGetUser(){
        let userID = this.props.match.params.userID;
        if(userID !== undefined) {
            this.props.getProfileUserThunk(userID)
        }
        else {
            this.props.setUserProfile(null, true);
        }
    }
    componentDidMount() {
       this.checkAndGetUser()
    }

    componentWillUnmount() {
        this.props.setUserProfile(null, true)
    }

    componentDidUpdate(prevProps: Readonly<ProfileCType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.match.params.userID !== this.props.match.params.userID){
            this.checkAndGetUser()
        }
    }

    render(){
    return(
        <Profile {...this.props}/>
    )}
}

export type mapStateToPropsType = {
    imgStr: string,
    userName: string,
    city: string,
    dateBirth: string,
    education: string,
    userProfile: UserProfile | null,
    status: string
}

const mapStateToProps = (state: State):mapStateToPropsType => {
    return {
        imgStr: state.profile!.user.imgSrc,
        userName: state.profile!.user.name,
        city: state.profile!.city,
        dateBirth: state.profile!.dataBirth,
        education: state.profile!.education,
        userProfile: state.profile!.newUsersProfile,
        status: state.profile!.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getProfileUserThunk, changeUserStatusAC}),
    withAuthRedirect,
    withRouter,
)(ProfileC)

