export type PeopleType = {
    id: number;
    name: string;
    photos: {
        small: null | string,
        large: null| string
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
    firstPages: number[],
    lastPages: number[],
    error: null | string

}

const initialState : FindPeopleType = {
    items: [],
    totalCount: 0,
    pageSize: 15,
    currentPage: 1,
    firstPages: [],
    lastPages: [],
    error: null

}

export const findPeopleReducer = (state: FindPeopleType = initialState, action: commonACFindPeopleTypes):FindPeopleType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)}
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
        case "SET_FIRST_LAST_PAGES": {
            return {...state, firstPages: action.payload.firstPages, lastPages: action.payload.lastPages}
        }
        case "SET_NEXT_PAGE": {
            return {...state, firstPages: [...state.firstPages, state.firstPages[state.firstPages.length - 1] + 1].filter((el, index) => index !== 0), currentPage: state.currentPage + 1}
        }  case "SET_PREVIOUS_PAGE": {
            if(state.currentPage === 1 || state.currentPage === 2 || state.currentPage === 3 || state.currentPage === 4){
                return {...state, firstPages: [1,2,3,4], currentPage: state.currentPage  - 1}
            }
            return {...state, firstPages: [state.firstPages[0]-1, ...state.firstPages ].filter((el, index) => index !== 3), currentPage: state.currentPage  - 1}
        }
        default: return state;
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

export const setNextPageAC = () => {
    return {
        type: 'SET_NEXT_PAGE',
    } as const
}

export const setPreviousPageAC = () => {
    return {
        type: 'SET_PREVIOUS_PAGE',
    } as const
}
export const setFirstAndLastPagesAC= (firstPages: number[], lastPages: number[]) => {
    return {
        type: 'SET_FIRST_LAST_PAGES',
        payload: {
            firstPages, lastPages
        }
    } as const
}



type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersAC = ReturnType<typeof setUsersAC>;
type setTotalPageAC = ReturnType<typeof setTotalPageAC>;
type setCurrentPageAC = ReturnType<typeof setCurrentPageAC>;
type setNextPageAC = ReturnType<typeof setNextPageAC>;
type setPreviousPageAC = ReturnType<typeof setPreviousPageAC>;
type setFirstAndLastPagesAC = ReturnType<typeof setFirstAndLastPagesAC>;

export type commonACFindPeopleTypes = followACType| unFollowACType | setUsersAC | setTotalPageAC | setCurrentPageAC | setNextPageAC | setPreviousPageAC | setFirstAndLastPagesAC;