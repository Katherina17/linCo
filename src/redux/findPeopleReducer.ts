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
    error: null | string

}

const initialState : FindPeopleType = {
   /* people: [
         {
            id: v1(),
            imgSrc: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            fullName: 'Lana Wolf',
            isFollow: true,
            status: 'I would be happy to be your friend',
            location: {
                country: 'USA',
                city: 'Los Angeles'
            }

        }, {
            id: v1(),
            imgSrc: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            fullName: 'Enola Kit',
            isFollow: true,
            status: 'Hello everyone',
            location: {
                country: 'USA',
                city: 'Chicago'
            }

        },{
            id: v1(),
            imgSrc: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            fullName: 'Jeff Berton',
            isFollow: true,
            status: '...',
            location: {
                country: 'USA',
                city: 'Los Angeles'
            }
        },{
            id: v1(),
            imgSrc: 'https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            fullName: 'Ann Peters',
            isFollow: true,
            status: 'I am looking for a job',
            location: {
                country: 'USA',
                city: 'Chicago'
            }
        },
    ]*/
    items: [],
    totalCount: 0,
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



type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersAC = ReturnType<typeof setUsersAC>;

export type commonACFindPeopleTypes = followACType| unFollowACType | setUsersAC;