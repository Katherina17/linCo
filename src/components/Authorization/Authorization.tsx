import {FormDataType, LoginFormContainer} from "./LoginForm";
import {connect} from "react-redux";
import {authMainUser} from "../../redux/authReducer";
import {State} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type AuthorizationPropsType = {
    authMainUser: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

export const Authorization = (props: AuthorizationPropsType) => {
    const {isAuth, authMainUser} = props;

    const onSubmit = (data: FormDataType) => {
        authMainUser(data.login, data.password, data.rememberMe)
    }

    return <>
        {
           isAuth ? <Redirect to={'/profile'}/> : <LoginFormContainer onSubmit={onSubmit}/>
        }
    </>
}

type mapStateToProps = {
    isAuth: boolean
}

const mapStateToProps = (state: State):mapStateToProps => {
    return {
        isAuth: state.auth!.isAuth
    }
}

export const AuthorizationContainer = connect(mapStateToProps, {authMainUser})(Authorization)