import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {State} from "../../redux/redux-store";
import {setAuthDataAC} from "../../redux/authReducer";
import axios from "axios";

type HeaderClassPropsType = {
    setAuthDataAC: (id : number, login: string, email: string) => void
} & mapStateToProps

 class HeaderC extends React.Component<HeaderClassPropsType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
            if(response.data.resultCode === 0){
                let{id, login, email} = response.data.data
                this.props.setAuthDataAC(id,login, email)
            }
        })
    }
    render(){
        return <Header isAuth={this.props.isAuth} userLogin={this.props.userLogin}/>
    }
}

type mapStateToProps = {
    isAuth: boolean;
    userLogin: string | null
}


const mapStateToProps = (state: State): mapStateToProps => {
    return {
        isAuth: state.auth!.isAuth,
        userLogin: state.auth!.data!.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthDataAC})(HeaderC)