import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {getAuthorizedUser, logOutUser} from "../../redux/authReducer";

type HeaderClassPropsType = {
    getAuthorizedUser: () => void
    logOutUser: () => void
} & mapStateToProps

 class HeaderC extends React.Component<HeaderClassPropsType>{
    componentDidMount() {
        this.props.getAuthorizedUser()
    }
    render(){
        return <Header isAuth={this.props.isAuth}
                       userLogin={this.props.userLogin}
                       logOut={this.props.logOutUser}
        />
    }
}

type mapStateToProps = {
    isAuth: boolean;
    userLogin: string | null;
}


const mapStateToProps = (state: State): mapStateToProps => {
    return {
        isAuth: state.auth!.isAuth,
        userLogin: state.auth!.data!.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {getAuthorizedUser, logOutUser})(HeaderC)