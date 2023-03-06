import {v1} from "uuid";
import {AppDispatch} from "./redux-store";
import {profileAPI} from "../api/api";

export type MyPost = {
    id: string,
    message: string,
    like: number,
    imgSrc: string
}

export type ProfileType = {
    user: UserType,
    dataBirth: string;
    city: string;
    education: string;
    posts: MyPost[];
    newPostText: string;
    userProfile: boolean;
    newUsersProfile: null | UserProfile
    status: string;
}

export type UserProfile = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: null | string
        vk: null | string
        facebook: null | string
        instagram: null | string
        twitter: null | string
        website: null | string
        youtube: null | string
        mainLink: null | string
    }
    photos: {
        small: null | string,
        large: null | string
    }
}

export type UserType = {
    id: string;
    name: string;
    imgSrc: string;
    friends: UserType[];
}

export const users: UserType[] = [
    {
        id: v1(),
        name: "Emilia Olsen",
        imgSrc: "https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        friends: [],
    }, {
        id: v1(),
        imgSrc: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Lana Wolf',
        friends: []
    }, {
        id: v1(),
        imgSrc: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Enola Kit',
        friends: []
    },{
        id: v1(),
        imgSrc: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Jeff Berton',
        friends: []
    },{
        id: v1(),
        imgSrc: 'https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        name: 'Ann Peters',
        friends: []
    },
]

users[0].friends.push(users[1], users[2], users[3], users[4])

const initialState : ProfileType = {
    user: users[0],
    dataBirth: '17 June',
    city: 'Minsk',
    education: 'BSU',
    posts: [
        {
            id: v1(),
            like: 10,
            message: 'hello, it\'s my first time to build an application',
            imgSrc: users[0].imgSrc
        },
        {
            id: v1(),
            like: 25,
            message: 'Today we do nothing',
            imgSrc: users[0].imgSrc
        },
        {
            id: v1(),
            like: 2,
            message: 'Do u like spending your free time doing something useful?',
            imgSrc: users[0].imgSrc
        },
    ],
    newPostText: '',
    userProfile: true,
    newUsersProfile: null,
    status: 'Hello world'
}

export const profileReducer = (state: ProfileType = initialState, action: commonActionProfileTypes):ProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newMessage: MyPost = {
                id: v1(),
                like: 0,
                message: state.newPostText,
                imgSrc: users[0].imgSrc
            }
            return {...state, newPostText: '', posts: [newMessage, ...state.posts]}
        }
        case 'UPDATE-POST-TEXT': {
            return {...state, newPostText: action.payload}
        }
        case "SET_USER_PROFILE": {
            return {...state, newUsersProfile: action.payload.user, userProfile: action.payload.isUserProfile}
        }
        case "CHANGE_USER_STATUS":{
            return {...state, status: action.payload.status}
        }
        case "GET_USER_STATUS":{
            return {...state, status: action.payload.status}
        }
        default: return state;
    }
    }

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updatePostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        payload: text
    } as const
}

export const setUserProfile = (user: UserProfile | null, isUserProfile: boolean) => {
    return {
        type: 'SET_USER_PROFILE',
        payload: {user, isUserProfile}
    } as const
}

export const changeUserStatusAC = (status: string) => {
    return {
        type: 'CHANGE_USER_STATUS',
        payload: {status}
    } as const
}

export const getUserStatusAC = (status: string) => {
    return {
        type: 'GET_USER_STATUS',
        payload: {status}
    } as const
}

type addPostActionCreatorPropsType = ReturnType<typeof addPostActionCreator>;
type updatePostTextActionCreatorType = ReturnType<typeof updatePostTextActionCreator>;
type setUserProfile = ReturnType<typeof setUserProfile>;
type changeUserStatusAC = ReturnType<typeof changeUserStatusAC>;
type getUserStatusAC  = ReturnType<typeof getUserStatusAC >;

export type commonActionProfileTypes = addPostActionCreatorPropsType|
    updatePostTextActionCreatorType |
    setUserProfile | changeUserStatusAC| getUserStatusAC ;

export function getProfileUserThunk(userID: string) {
    return (dispatch: AppDispatch) => {
        profileAPI.downloadUserPage(userID).then(data => dispatch(setUserProfile(data, false)))

    }
}

export const getUserStatusThunk = (userID: string) => {
    return (dispatch: AppDispatch) => {
        profileAPI.getUserStatus(userID).then(data => {
            dispatch(getUserStatusAC(data))
        })
    }
}

export const changeUserStatusThunk = (newStatus: string) => {
    debugger
    return (dispatch: AppDispatch) => {
        profileAPI.changeUserStatus(newStatus).then(data => {
            if(data.data.resultCode === 0){
                dispatch(changeUserStatusAC(newStatus))
            }
        }
        )
    }
}