import {AppDispatch, ApplicationDispatch} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setStatus} from "./appReducer";
import {handleServerAppError} from "utils/handleServerAppError/handleServerAppError";
import {handleServerNetworkError} from "utils/handleServerNetworkError/handleServerNetworkError";

type DataType = {
    id: number | null;
    login: string | null;
    email: string | null;
}

export type authStateType = {
    data: DataType,
    messages: [] | null,
    fieldsErrors: [] | null,
    resultCode: 0 | 1 | 10 |null,
    isAuth: boolean
    captchaURL: null | string
}

const initialState: authStateType = {
    data: {id: null, login: null, email: null},
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    isAuth: false,
    captchaURL: null
}

export const authReducer = (state: authStateType = initialState, action: authActionsType): authStateType => {
    switch (action.type) {
        case "auth/SET-AUTH-DATA": {
            return {...state, data: {...action.payload}, isAuth: action.payload.isAuth}
        }
        case "auth/SET-CAPTCHA": {
            return {...state, captchaURL: action.payload.captchaUrl}
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

export const setCaptcha = (captchaUrl: string | null) => {
    return {
        type: 'auth/SET-CAPTCHA',
        payload: {captchaUrl}
    } as const
}

type setAuthData = ReturnType<typeof setAuthDataAC>;
type setCaptcha = ReturnType<typeof setCaptcha>;
export type authActionsType = setAuthData | setCaptcha

export const getAuthorizedUser = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await authAPI.authMeAPI()
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthDataAC(id, login, email, true))
            } else {
                handleServerAppError(data.data, dispatch)
            }
        } catch (e) {
            handleServerNetworkError(e, dispatch)
        } finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const authMainUser = (email: string, password: string, rememberMe: boolean, captcha?: string) => {
    return async (dispatch: ApplicationDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await authAPI.login(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                dispatch(getAuthorizedUser())
                dispatch(setCaptcha(null))
            }
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrlThunk())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('logInOrLigOut', {_error: message}))
            }
        } catch (e) {
            handleServerNetworkError(e, dispatch)
        } finally {
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
            handleServerNetworkError(e, dispatch)
        } finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const getCaptchaUrlThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            const response = await securityAPI.getCaptcha();
            dispatch(setCaptcha(response.data.url))

        } catch (e) {
            handleServerNetworkError(e, dispatch)
        } finally {
            dispatch(setStatus('idle'))
        }
    }
}

