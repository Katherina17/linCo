import {ApplicationActionThunk} from "./redux-store";
import {getAuthorizedUser} from "./authReducer";


export type appReducerType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}


export const appReducer = (state: appReducerType = initialState, action: appActionsType): appReducerType => {
    switch (action.type) {
        case "app/SET-INITIALIZE-DATA": {
            return {...state, initialized: true}
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

export type appActionsType = ReturnType<typeof setInitializeAppAC>

export const getInitializedApp = (): ApplicationActionThunk => {
    return async (dispatch) => {
        let authorizedUser = dispatch(getAuthorizedUser());
        let isAuthorized = await Promise.all([authorizedUser])
        if (isAuthorized) {
            dispatch(setInitializeAppAC())
        }
    }
}

