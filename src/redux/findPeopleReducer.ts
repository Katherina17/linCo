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
        case "findPeople/FOLLOW": {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case "findPeople/UNFOLLOW": {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case "findPeople/SET_USERS": {
            return {...state, items: action.payload.users}
        }
        case "findPeople/SET_TOTAL_PAGE": {
            return {...state, totalCount: action.payload.countPage}
        }
        case "findPeople/SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "findPeople/SET_FETCH": {
            return {...state, isFetching: action.payload.isFetch}
        }
        case "findPeople/SET_FOLLOWING":{
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
        type: 'findPeople/FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'findPeople/UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

export const setUsersAC = (users: PeopleType[]) => {
    return {
        type: 'findPeople/SET_USERS',
        payload: {
            users
        }
    } as const
}
export const setTotalPageAC = (countPage: number) => {
    return {
        type: 'findPeople/SET_TOTAL_PAGE',
        payload: {
            countPage
        }
    } as const
}


export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'findPeople/SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}



export const setFetchAC = (isFetch: boolean) => {
    return {
        type: 'findPeople/SET_FETCH',
        payload: {
            isFetch
        }
    } as const
}

export const setFollowingAC = (userID: number, isFollow: boolean) => {
    return {
        type: 'findPeople/SET_FOLLOWING',
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
    return async (dispatch: AppDispatch) => {
        try {
            let data = await userAPI.getUsers(pageSize, currentPage)
            dispatch(setUsersAC(data.items))
            dispatch(setFetchAC(false))
            dispatch(setTotalPageAC(data.totalCount))
        } catch (e) {
            console.log(e)
        }
    }
}

export const changeUsersThunkCreator = (pageSize: number, currentPage: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setFetchAC(true))
            let data = await userAPI.getUsers(pageSize, currentPage);
            dispatch(setUsersAC(data.items))
            dispatch(setFetchAC(false))
        } catch (e) {
            console.log(e)
        }
    }
}


export const subscribeUserThunkCreator = (userID: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setFollowingAC(userID, true))
            let response = await followAPI.followUser(userID);
            if (response.data.resultCode === 0) {
                dispatch(followAC(userID))
            }
            dispatch(setFollowingAC(userID, false))
        } catch (e) {
            console.log(e)
        }
    }
}
export const unSubscribeUserThunkCreator = (userID: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setFollowingAC(userID, true))
            let response = await followAPI.unFollowUser(userID);
            if (response.data.resultCode === 0) {
                dispatch(unFollowAC(userID))
            }
            dispatch(setFollowingAC(userID, false))
        } catch (e) {
            console.log(e)
        }
    }
}
