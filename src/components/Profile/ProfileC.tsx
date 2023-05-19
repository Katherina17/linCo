import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {
    changeUserStatusThunk,
    getProfileUserThunk, getUserStatusThunk,
    setUserProfile, updateOwnerPhotoThunk, updateProfileInfoThunk,
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
    setUserProfile: (user: UserProfile | null) => void,
    getProfileUserThunk: (userID: string) =>  void
    getUserStatusThunk: (userID: string) => void
    updateOwnerPhotoThunk: (file: File) => void
    updateProfileInfoThunk: (userProfile:  UserProfile  ) => Promise<ErrorConstructor>

} & mapStateToPropsType & RouteComponentProps<PathParam>;


type PathParam = {
    userID: string
}


export class ProfileC extends React.Component<ProfileCType>{
    checkAndGetUser(){
        let userID = this.props.match.params.userID;
        let ownerID = String(this.props.ownerId)
        if(userID !== undefined) {
            this.props.getProfileUserThunk(userID)
            this.props.getUserStatusThunk(userID)
        }
        else {
            this.props.getProfileUserThunk(ownerID)
            this.props.getUserStatusThunk(ownerID)
        }
    }
    componentDidMount() {
       this.checkAndGetUser()
    }

    componentWillUnmount() {
        this.props.setUserProfile(null)
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
        <Profile {...this.props} owner={!this.props.match.params.userID}/>
    )}
}

export type mapStateToPropsType = {
    userProfile: UserProfile | null,
    status: string
    statusLoading: RequestStatusType
    ownerId: number | null,
    error: string | null
}

const mapStateToProps = (state: RootState):mapStateToPropsType => {
    return {
        userProfile: state.profile.user,
        status: state.profile.status,
        statusLoading: state.app.status,
        ownerId: state.auth.data.id,
        error: state.app.error
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile,
        getProfileUserThunk,
        getUserStatusThunk,
        changeUserStatusThunk,
        updateOwnerPhotoThunk,
        updateProfileInfoThunk
    }),
    withAuthRedirect,
    withRouter,
)(ProfileC)

