import {v1} from "uuid";

export type PeopleType = {
    id: string;
    fullName: string;
    imgSrc: string;
    isFollow: boolean;
    status: string;
    location: {
        country: string;
        city: string;
    }
}

export type FindPeopleType = {
    people: PeopleType[]
}

const initialState : FindPeopleType = {
    people: [
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
    ]
}

export const findPeopleReducer = (state: FindPeopleType = initialState, action: commonACFindPeopleTypes):FindPeopleType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, people: state.people.map(el => el.id === action.payload.userID ? {...el, isFollow: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, people: state.people.map(el => el.id === action.payload.userID ? {...el, isFollow: false} : el)}
        }
        default: return state;
    }
    }

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}
export const unFollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}



type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;

export type commonACFindPeopleTypes = followACType| unFollowACType;