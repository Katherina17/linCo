import {AppDispatch} from "./redux-store";
import {followAPI, userAPI} from "../api/api";

export type PeopleType = {
    id: number;
    name: string;
    photos: {
        small: null | string,
        large: null | string
    };
    followed: boolean;
    status: string | null;
    uniqueUrlName: string | null;
}

export type FindPeopleType = {
    items: PeopleType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    error: null | string

}

const initialState: FindPeopleType = {
    items: [],
    totalCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    error: null
}

export const findPeopleReducer = (state: FindPeopleType = initialState, action: commonACFindPeopleTypes): FindPeopleType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case "SET_USERS": {
            return {...state, items: action.payload.users}
        }
        case "SET_TOTAL_PAGE": {
            return {...state, totalCount: action.payload.countPage}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET_FETCH": {
            return {...state, isFetching: action.payload.isFetch}
        }
        case "SET_FOLLOWING":{
            return {...state, followingInProgress: action.payload.isFollow ?
                    [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(el => el!== action.payload.userID)}
        }
        default:
            return state;
    }
}

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

export const setUsersAC = (users: PeopleType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}
export const setTotalPageAC = (countPage: number) => {
    return {
        type: 'SET_TOTAL_PAGE',
        payload: {
            countPage
        }
    } as const
}


export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}



export const setFetchAC = (isFetch: boolean) => {
    return {
        type: 'SET_FETCH',
        payload: {
            isFetch
        }
    } as const
}

export const setFollowingAC = (userID: number, isFollow: boolean) => {
    return {
        type: 'SET_FOLLOWING',
        payload: {
            userID, isFollow
        }
    } as const
}


type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersAC = ReturnType<typeof setUsersAC>;
type setTotalPageAC = ReturnType<typeof setTotalPageAC>;
type setCurrentPageAC = ReturnType<typeof setCurrentPageAC>;
type setFetchAC = ReturnType<typeof setFetchAC>;
type setFollowingAC = ReturnType<typeof setFollowingAC>;

export type commonACFindPeopleTypes =
    followACType
    | unFollowACType
    | setUsersAC
    | setTotalPageAC
    | setCurrentPageAC
    | setFetchAC
    | setFollowingAC;

export const getUsersThunkCreator = (pageSize: number, currentPage: number) => {
    return (dispatch: AppDispatch) => {
        userAPI.getUsers(pageSize, currentPage).then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setFetchAC(false))
                dispatch(setTotalPageAC(data.totalCount))
            }
        )
    }
}

export const changeUsersThunkCreator = (pageSize: number, currentPage: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(setFetchAC(true))
        userAPI.getUsers(pageSize, currentPage).then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setFetchAC(false))
            }
        )
    }
}


export const subscribeUserThunkCreator = (userID: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(setFollowingAC(userID,true))
        followAPI.followUser(userID).then((response) => {
                if(response.data.resultCode === 0){
                    dispatch(followAC(userID))
                }
                dispatch(setFollowingAC(userID,false))
            }
        )
    }
}
export const unSubscribeUserThunkCreator = (userID: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(setFollowingAC(userID,true))
        followAPI.unFollowUser(userID).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowAC(userID))
                }
                dispatch(setFollowingAC(userID,false))
            }
        )
    }
}
