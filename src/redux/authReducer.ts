import {AppDispatch} from "./redux-store";
import {authAPI} from "../api/api";

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

export const authReducer = (state: authStateType = initialState, action: commonActions): authStateType => {
    switch(action.type){
        case "SET-AUTH-DATA": {
            return {...state, data: {...action.payload}, isAuth: true}
        }
        default: return state
    }
}


export const setAuthDataAC = (id : number, login: string, email: string) => {
    return {
        type: 'SET-AUTH-DATA',
        payload: { id, login, email}
    } as const
}

type setAuthData = ReturnType<typeof setAuthDataAC>;
type commonActions = setAuthData

export const getAuthorizedUser = () => {
    return (dispatch: AppDispatch) => {
        authAPI().then(data => {
            if(data.resultCode === 0){
                let{id, login, email} = data.data
                dispatch(setAuthDataAC(id,login, email))
            }
        })
    }
}