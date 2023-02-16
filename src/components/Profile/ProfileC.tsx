import React from "react";
import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {setUserProfile, UserProfile} from "../../redux/profileReducer";
import axios from "axios";
import { withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

type ProfileCType = {
    setUserProfile: (user: UserProfile | null, isUserProfile: boolean) => void
} & mapStateToPropsType & RouteComponentProps<PathParam>;


type PathParam = {
    userID: string
}


export class ProfileC extends React.Component<ProfileCType>{
    checkAndGetUser(){
        let userID = this.props.match.params.userID;
        if(userID !== undefined) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(
                response => this.props.setUserProfile(response.data, false)
            )
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
    userProfile: UserProfile | null

}

const mapStateToProps = (state: State):mapStateToPropsType => {
    return {
        imgStr: state.profile!.user.imgSrc,
        userName: state.profile!.user.name,
        city: state.profile!.city,
        dateBirth: state.profile!.dataBirth,
        education: state.profile!.education,
        userProfile: state.profile!.newUsersProfile

    }
}



const ProfileWIthRouter = withRouter(ProfileC)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWIthRouter)

