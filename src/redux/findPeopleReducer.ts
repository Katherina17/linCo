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
    error: null | string

}

const initialState: FindPeopleType = {
    items: [],
    totalCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
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


type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersAC = ReturnType<typeof setUsersAC>;
type setTotalPageAC = ReturnType<typeof setTotalPageAC>;
type setCurrentPageAC = ReturnType<typeof setCurrentPageAC>;
type setFetchAC = ReturnType<typeof setFetchAC>;

export type commonACFindPeopleTypes =
    followACType
    | unFollowACType
    | setUsersAC
    | setTotalPageAC
    | setCurrentPageAC
    | setFetchAC;