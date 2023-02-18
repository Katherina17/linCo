import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {
    followAC,
    PeopleType, setCurrentPageAC, setFetchAC,
    setTotalPageAC,
    setUsersAC,
    unFollowAC
} from "../../redux/findPeopleReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


type mapDispatchToProps = {
    followUser: (userID: number) => void;
    unFollowUser: (userID: number) => void;
    setUsers: (users: PeopleType[]) => void;
    setTotalPage: (totalPage: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setFetch: (isFetch: boolean) => void
}

export type mapStateToProps = {
    state: PeopleType[],
    currentPage: number,
    totalCount: number,
    pageSize: number,
    isFetching?: boolean
}

export type FindPeoplePropsType = mapDispatchToProps & mapStateToProps;


export class FindPeople extends React.Component<FindPeoplePropsType> {
    constructor(props: FindPeoplePropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true})
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setFetch(false)
                    this.props.setTotalPage(response.data.totalCount)
                }
            )
    }

    componentDidUpdate(prevProps: Readonly<FindPeoplePropsType>, prevState: Readonly<FindPeoplePropsType>, snapshot?: any) {
        if (prevProps.currentPage !== this.props.currentPage) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true})
                .then(response => {
                        this.props.setUsers(response.data.items);
                        this.props.setFetch(false)
                    }
                )
        }
    }

    setCurrentPage(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        this.props.setFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`, {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
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
                   pageSize={this.props.pageSize}/>
    }

}

const mapStateToProps = (state: State): mapStateToProps => {
    return {
        state: state.findPeople!.items,
        currentPage: state.findPeople!.currentPage,
        totalCount: state.findPeople!.totalCount,
        pageSize: state.findPeople!.pageSize,
        isFetching: state.findPeople!.isFetching,
    }
}

export const FindPeopleContainer = connect(mapStateToProps, {
    followUser: followAC,
    unFollowUser: unFollowAC,
    setUsers: setUsersAC,
    setTotalPage: setTotalPageAC,
    setCurrentPage: setCurrentPageAC,
    setFetch: setFetchAC
})(FindPeople);
