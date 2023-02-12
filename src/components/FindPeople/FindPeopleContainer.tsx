import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {
    commonACFindPeopleTypes,
    followAC,
    PeopleType, setCurrentPageAC, setFirstAndLastPagesAC, setNextPageAC, setPreviousPageAC,
    setTotalPageAC,
    setUsersAC,
    unFollowAC
} from "../../redux/findPeopleReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapDispatchToProps = {
    followUser: (userID: number) => void;
    unFollowUser: (userID: number) => void;
    setUsers: (users: PeopleType[]) => void;
    setTotalPage: (totalPage: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setNextPageAC: () => void;
    setPreviousPageAC: () => void;
    setFirstAndLastPagesAC: (firstPages: number[], lastPages: number[]) => void
}

export type mapStateToProps = {
    state: PeopleType[],
    currentPage: number,
    totalCount: number,
    pageSize: number,
    firstPages: number[],
    lastPages: number[]
}

export type FindPeoplePropsType = mapDispatchToProps & mapStateToProps;


export class FindPeople extends React.Component<FindPeoplePropsType> {
    constructor(props: FindPeoplePropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalPage(response.data.totalCount)
                    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
                    let firstPages = [];
                    for (let i = 1; i <= 4; i++) {
                        firstPages.push(i);
                    }
                    let lastPages = []
                    for (let i = pagesCount - 2; i <= pagesCount; i++) {
                        lastPages.push(i);
                    }
                    this.props.setFirstAndLastPagesAC(firstPages, lastPages)
                }
            )
    }

    componentDidUpdate(prevProps: Readonly<FindPeoplePropsType>, prevState: Readonly<FindPeoplePropsType>, snapshot?: any) {
        if (prevProps.currentPage !== this.props.currentPage) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => this.props.setUsers(response.data.items)
                )
        }
    }

    setNextPage() {
        this.props.setNextPageAC()
    }

    setPreviousPage() {
        this.props.setPreviousPageAC()
    }

    setCurrentPage(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`).then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <Users setNextPage={() => this.setNextPage()} setPreviousPage={() => this.setPreviousPage()}
                      setCurrentPage={(cur) => this.setCurrentPage(cur)} unFollowUser={this.props.unFollowUser}
                      followUser={this.props.followUser} state={this.props.state}
                      currentPage={this.props.currentPage} totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize} firstPages={this.props.firstPages}
                      lastPages={this.props.lastPages}/>
    }

}

const mapStateToProps = (state: State): mapStateToProps => {
    return {
        state: state.findPeople!.items,
        currentPage: state.findPeople!.currentPage,
        totalCount: state.findPeople!.totalCount,
        pageSize: state.findPeople!.pageSize,
        firstPages: state.findPeople!.firstPages,
        lastPages: state.findPeople!.lastPages
    }
}

const mapDispatchToProps = (dispatch: (action: commonACFindPeopleTypes) => void): mapDispatchToProps => {
    return {
        followUser: (userID) => dispatch(followAC(userID)),
        unFollowUser: (userID) => dispatch(unFollowAC(userID)),
        setUsers: (users: PeopleType[]) => dispatch(setUsersAC(users)),
        setTotalPage: (totalPage: number) => dispatch(setTotalPageAC(totalPage)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setFirstAndLastPagesAC: (firstPages: number[], lastPages: number[]) => dispatch(setFirstAndLastPagesAC(firstPages, lastPages)),
        setNextPageAC: () => dispatch(setNextPageAC()),
        setPreviousPageAC: () => dispatch(setPreviousPageAC())

    }
}


export const FindPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(FindPeople);
