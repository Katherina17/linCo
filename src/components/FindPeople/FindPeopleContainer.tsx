import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {
    followAC,
    PeopleType, setCurrentPageAC, setFetchAC, setFollowingAC,
    setTotalPageAC,
    setUsersAC,
    unFollowAC
} from "../../redux/findPeopleReducer";
import React from "react";
import {Users} from "./Users";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {userAPI} from "../../api/api";


type mapDispatchToProps = {
    followUser: (userID: number) => void;
    unFollowUser: (userID: number) => void;
    setUsers: (users: PeopleType[]) => void;
    setTotalPage: (totalPage: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setFetch: (isFetch: boolean) => void
    setFollowingAC: (userID: number, isFollowing: boolean) => void
}

export type mapStateToProps = {
    state: PeopleType[],
    currentPage: number,
    totalCount: number,
    pageSize: number,
    isFetching?: boolean,
    followingInProgress: number[]
}

export type FindPeoplePropsType = mapDispatchToProps & mapStateToProps;


export class FindPeople extends React.Component<FindPeoplePropsType> {
    constructor(props: FindPeoplePropsType) {
        super(props);
    }

    componentDidMount() {
        userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                    this.props.setUsers(data.items)
                    this.props.setFetch(false)
                    this.props.setTotalPage(data.totalCount)
                }
            )
    }

    componentDidUpdate(prevProps: Readonly<FindPeoplePropsType>, prevState: Readonly<FindPeoplePropsType>, snapshot?: any) {
        if (prevProps.currentPage !== this.props.currentPage) {
            userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                        this.props.setUsers(data.items);
                        this.props.setFetch(false)
                    }
                )
        }
    }

    setCurrentPage(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        this.props.setFetch(true)
        userAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data=> {
                this.props.setUsers(data.items);
                this.props.setFetch(false)
            })
    }

    render() {
        return this.props.isFetching ?
            <Box sx={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <CircularProgress/>
            </Box>
            :
            <Users setCurrentPage={(cur) => this.setCurrentPage(cur)} unFollowUser={this.props.unFollowUser}
                   followUser={this.props.followUser} state={this.props.state}
                   currentPage={this.props.currentPage} totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   setFollowingAC = {this.props.setFollowingAC}
                   followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.findPeople!.followingInProgress
    }
}

export const FindPeopleContainer = connect(mapStateToProps, {
    followUser: followAC,
    unFollowUser: unFollowAC,
    setUsers: setUsersAC,
    setTotalPage: setTotalPageAC,
    setCurrentPage: setCurrentPageAC,
    setFetch: setFetchAC,
    setFollowingAC: setFollowingAC
})(FindPeople);
