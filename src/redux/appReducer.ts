import {ApplicationActionThunk} from "./redux-store";
import {getAuthorizedUser} from "./authReducer";


export type appReducerType = {
    initialized: boolean
    status: RequestStatusType
}

const initialState = {
    initialized: false,
    status: 'idle' as RequestStatusType,
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

export type appActionsType = ReturnType<typeof setInitializeAppAC> | ReturnType<typeof setStatus>

export const getInitializedApp = (): ApplicationActionThunk => {
    return async (dispatch) => {
        let authorizedUser = dispatch(getAuthorizedUser());
        let isAuthorized = await Promise.all([authorizedUser])
        if (isAuthorized) {
            dispatch(setInitializeAppAC())
        }
    }
}

