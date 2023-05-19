import {ApplicationActionThunk} from "./redux-store";
import {getAuthorizedUser} from "./authReducer";
import {handleServerNetworkError} from "utils/handleServerNetworkError/handleServerNetworkError";


export type appReducerType = {
    initialized: boolean
    status: RequestStatusType
    error: null | string
}

const initialState = {
    initialized: false,
    status: 'idle' as RequestStatusType,
    error: null as null | string
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'pageLoading'

export const appReducer = (state: appReducerType = initialState, action: appActionsType): appReducerType => {
    switch (action.type) {
        case "app/SET-INITIALIZE-DATA": {
            return {...state, initialized: true}
        }
        case "app/SET-STATUS": {
            return {...state, status: action.payload.status}
        }
        case "app/SET-ERROR": {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}


export const setInitializeAppAC = () => {
    return {
        type: 'app/SET-INITIALIZE-DATA',
    } as const
}

export const setStatus = (status: RequestStatusType) => {
    return {
        type: 'app/SET-STATUS',
        payload: {status}
    } as const
}

export const setError = (error: null | string) => {
    return {
        type: 'app/SET-ERROR',
        payload: {error}
    } as const
}

export type appActionsType =
    ReturnType<typeof setInitializeAppAC>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setError>

export const getInitializedApp = (): ApplicationActionThunk => {
    return async (dispatch) => {
        try {
            let authorizedUser = dispatch(getAuthorizedUser());
            let isAuthorized = await Promise.all([authorizedUser])
            if (isAuthorized) {
                dispatch(setInitializeAppAC())
            }
        } catch (e) {
            handleServerNetworkError(e, dispatch)
        }
    }
}

