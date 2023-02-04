import {connect} from "react-redux";
import {FindPeople} from "./FindPeople";
import {State} from "../../redux/redux-store";
import {commonACFindPeopleTypes, followAC, PeopleType, setUsersAC, unFollowAC} from "../../redux/findPeopleReducer";

type mapDispatchToProps = {
    followUser: (userID: number) => void;
    unFollowUser: (userID: number) => void;
    setUsers: (users: PeopleType[]) => void
}

type mapStateToProps = {
    state: PeopleType[]
}

export type FindPeoplePropsType = mapDispatchToProps & mapStateToProps;

const mapStateToProps = (state: State): mapStateToProps => {
    return {
        state: state.findPeople!.items,
    }
}

const mapDispatchToProps = (dispatch: (action: commonACFindPeopleTypes) => void): mapDispatchToProps => {
    return {
        followUser: (userID) => dispatch(followAC(userID)),
        unFollowUser: (userID) => dispatch(unFollowAC(userID)),
        setUsers: (users: PeopleType[]) => dispatch(setUsersAC(users)),

    }
}


export const FindPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(FindPeople);
