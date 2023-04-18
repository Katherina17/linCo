import React from "react";
import {connect} from "react-redux";
import {RootState, State} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {
    changeUserStatusThunk,
    getProfileUserThunk, getUserStatusThunk,
    setUserProfile,
    UserProfile
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {RequestStatusType} from "../../redux/appReducer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


type ProfileCType = {
    setUserProfile: (user: UserProfile | null, isUserProfile: boolean) => void,
    getProfileUserThunk: (userID: string) =>  void
    getUserStatusThunk: (userID: string) => void

} & mapStateToPropsType & RouteComponentProps<PathParam>;


type PathParam = {
    userID: string
}


export class ProfileC extends React.Component<ProfileCType>{
    checkAndGetUser(){
        let userID = this.props.match.params.userID;
        if(userID !== undefined) {
            this.props.getProfileUserThunk(userID)
            this.props.getUserStatusThunk(userID)
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
        if(this.props.statusLoading === 'pageLoading'){
            return <Box sx={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <CircularProgress/>
            </Box>
        }
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
    statusLoading: RequestStatusType
}

const mapStateToProps = (state: RootState):mapStateToPropsType => {
    return {
        imgStr: state.profile.user.imgSrc,
        userName: state.profile.user.name,
        city: state.profile.city,
        dateBirth: state.profile.dataBirth,
        education: state.profile.education,
        userProfile: state.profile.newUsersProfile,
        status: state.profile.status,
        statusLoading: state.app.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile,
        getProfileUserThunk,
        getUserStatusThunk,
        changeUserStatusThunk
    }),
    withAuthRedirect,
    withRouter,
)(ProfileC)

