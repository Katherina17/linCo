import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {
    changeUsersThunkCreator,
     getUsersThunkCreator,
    PeopleType, setCurrentPageAC, subscribeUserThunkCreator,
     unSubscribeUserThunkCreator
} from "../../redux/findPeopleReducer";
import React from "react";
import {Users} from "./Users";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {withAuthRedirect, mapStateToPropsForRedirect} from "../hoc/WithAuthRedirect";
import {Friends} from "../Friends/Friends";
import {SenderMessage} from "../Dialogs/Dialog/Message/SenderMessage/SenderMessage";
import {compose} from "redux";


type mapDispatchToProps = {
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void;
    changeUsersThunkCreator: (pageSize: number, currentPage: number) => void;
    subscribeUserThunkCreator: (userID: number) => void,
    unSubscribeUserThunkCreator: (userID: number) => void,
    setCurrentPage: (currentPage: number) => void;
}

export type mapStateToProps = {
    state: PeopleType[],
    currentPage: number,
    totalCount: number,
    pageSize: number,
    isFetching?: boolean,
    followingInProgress: number[],
    isAuth: boolean
}

export type FindPeoplePropsType = mapDispatchToProps & mapStateToProps;


export class FindPeople extends React.Component<FindPeoplePropsType> {
    constructor(props: FindPeoplePropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
    }

    componentDidUpdate(prevProps: Readonly<FindPeoplePropsType>, prevState: Readonly<FindPeoplePropsType>, snapshot?: any) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.changeUsersThunkCreator(this.props.pageSize, this.props.currentPage)
        }
    }

    setCurrentPage(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        this.props.changeUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    }

    render() {
        return this.props.isFetching ?
            <Box sx={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <CircularProgress/>
            </Box>
            :
            <Users setCurrentPage={(cur) => this.setCurrentPage(cur)}
                   state={this.props.state}
                   currentPage={this.props.currentPage}
                   totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
                   subscribeUserThunkCreator={this.props.subscribeUserThunkCreator}
                   unSubscribeUserThunkCreator={this.props.unSubscribeUserThunkCreator}
                   isAuth={this.props.isAuth}
            />
    }

}

const mapStateToProps = (state: State): mapStateToProps => {
    return {
        state: state.findPeople!.items,
        currentPage: state.findPeople!.currentPage,
        totalCount: state.findPeople!.totalCount,
        pageSize: state.findPeople!.pageSize,
        isFetching: state.findPeople!.isFetching,
        followingInProgress: state.findPeople!.followingInProgress,
        isAuth: state.auth!.isAuth
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        getUsersThunkCreator,
        changeUsersThunkCreator,
        subscribeUserThunkCreator,
        unSubscribeUserThunkCreator
    }), withAuthRedirect
)(FindPeople)


