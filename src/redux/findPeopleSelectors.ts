import {RootState} from "./redux-store";
import {PeopleType} from "./findPeopleReducer";
import {RequestStatusType} from "redux/appReducer";


export const getPeopleStateSelector = (state: RootState): PeopleType[] => {
    return state.findPeople.items
}


export const getCurrentPageSelector = (state: RootState): number => {
    return state.findPeople.currentPage
}

export const getTotalCountSelector = (state: RootState): number => {
    return state.findPeople.totalCount
}

export const getPageSizeSelector = (state: RootState): number => {
    return state.findPeople.pageSize
}


export const getFetchingSelector = (state: RootState): boolean => {
    return state.findPeople.isFetching
}

export const setFollowingInProgressSelector = (state: RootState): number[] => {
    return state.findPeople.followingInProgress
}


export const setAuthSelector = (state: RootState): boolean => {
    return state.auth.isAuth
}


export const getStatusApp = (state: RootState): RequestStatusType => {
    return state.app.status
}