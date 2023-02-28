import React from "react";
import {connect, ConnectedComponent} from "react-redux";
import {State} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {getProfileUserThunk, setUserProfile, UserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {AuthRedirect} from "../hoc/AuthRedirect";


type ProfileCType = {
    setUserProfile: (user: UserProfile | null, isUserProfile: boolean) => void,
    getProfileUserThunk: (userID: string) => void
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

}

const mapStateToProps = (state: State):mapStateToPropsType => {
    return {
        imgStr: state.profile!.user.imgSrc,
        userName: state.profile!.user.name,
        city: state.profile!.city,
        dateBirth: state.profile!.dataBirth,
        education: state.profile!.education,
        userProfile: state.profile!.newUsersProfile,
    }
}

type mapStateToPropsForRedirect = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state:State):mapStateToPropsForRedirect => {
    return {isAuth: state.auth!.isAuth}
}

const ProfileWIthRouter = withRouter(ProfileC)

let withRedirectProfile:any = AuthRedirect(ProfileWIthRouter)
withRedirectProfile = connect(mapStateToPropsForRedirect)(withRedirectProfile)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile, getProfileUserThunk})(withRedirectProfile)

