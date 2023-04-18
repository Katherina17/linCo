import {AppDispatch, ApplicationDispatch} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setStatus} from "./appReducer";

type DataType = {
    id: number | null;
    login: string | null;
    email: string | null;
}

export type authStateType = {
    data: DataType,
    messages: [] | null,
    fieldsErrors: [] | null,
    resultCode: 0 | 1 | null,
    isAuth: boolean
}

const initialState: authStateType = {
    data: {id: null, login: null, email: null},
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    isAuth: false
}

export const authReducer = (state: authStateType = initialState, action: authActionsType): authStateType => {
    switch (action.type) {
        case "auth/SET-AUTH-DATA": {
            return {...state, data: {...action.payload}, isAuth: action.payload.isAuth}
        }
        default:
            return state
    }
}


export const setAuthDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'auth/SET-AUTH-DATA',
        payload: {id, login, email, isAuth}
    } as const
}

type setAuthData = ReturnType<typeof setAuthDataAC>;
export type authActionsType = setAuthData

export const getAuthorizedUser = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await authAPI.authMeAPI()
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthDataAC(id, login, email, true))
            }
        } catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const authMainUser = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: ApplicationDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(getAuthorizedUser())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('logInOrLigOut', {_error: message}))
            }
        } catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}


export const logOutUser = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let isLogOut = await authAPI.logOut();
            if (isLogOut) {
                dispatch(setAuthDataAC(null, null, null, false))
            }
        } catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}