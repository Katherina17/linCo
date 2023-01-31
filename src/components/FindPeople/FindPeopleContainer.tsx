import {connect} from "react-redux";
import {FindPeople} from "./FindPeople";
import {State} from "../../redux/redux-store";
import {commonACFindPeopleTypes, followAC, PeopleType, unFollowAC} from "../../redux/findPeopleReducer";

type mapDispatchToProps = {
    followUser: (userID: string) => void;
    unFollowUser: (userID: string) => void;
}

type mapStateToProps = {
    state: PeopleType[]
}

export type FindPeoplePropsType = mapDispatchToProps & mapStateToProps;

const mapStateToProps = (state: State): mapStateToProps => {
    return {
        state: state.findPeople!.people,
    }
}

const mapDispatchToProps = (dispatch: (action: commonACFindPeopleTypes) => void): mapDispatchToProps => {
    return {
        followUser: (userID) => dispatch(followAC(userID)),
        unFollowUser: (userID) => dispatch(unFollowAC(userID)),

    }
}


export const FindPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(FindPeople);
