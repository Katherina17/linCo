import {AppDispatch, ApplicationActionThunk, ApplicationDispatch} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthorizedUser} from "./authReducer";



export type appReducerType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}


export const appReducer = (state: appReducerType = initialState, action: appActionsType): appReducerType => {
    switch(action.type){
        case "SET-INITIALIZE-DATA":{
            return {...state, initialized: true}
        }
        default: return state
    }
}


export const setInitializeAppAC = () => {
    return {
        type: 'SET-INITIALIZE-DATA',
    } as const
}

export type appActionsType =  ReturnType<typeof setInitializeAppAC>

export const getInitializedApp = ():ApplicationActionThunk => {
    return (dispatch) => {
        let authorizedUser = dispatch(getAuthorizedUser());
        Promise.all([authorizedUser]).then(() => {
            dispatch(setInitializeAppAC())
        })
    }
}

