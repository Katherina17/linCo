import {FormDataType, LoginFormContainer} from "./LoginForm";
import {connect} from "react-redux";
import {authMainUser} from "../../redux/authReducer";
import {RootState} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type AuthorizationPropsType = {
    authMainUser: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    isAuth: boolean
    captcha: string | null
}



export const Authorization = (props: AuthorizationPropsType) => {
    const {isAuth, authMainUser} = props;

    const onSubmit = (data: FormDataType) => {
        authMainUser(data.login, data.password, data.rememberMe, data.captcha)
    }

    return <>
        {
           isAuth ? <Redirect to={'/profile'}/>
               : <LoginFormContainer onSubmit={onSubmit} captcha={props.captcha}/>
        }
    </>
}

type mapStateToProps = {
    isAuth: boolean,
    captcha: string | null
}

const mapStateToProps = (state: RootState):mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captchaURL
    }
}

export const AuthorizationContainer = connect(mapStateToProps, {authMainUser})(Authorization)