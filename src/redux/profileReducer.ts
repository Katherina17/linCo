import {v1} from "uuid";
import {AppDispatch} from "./redux-store";
import {profileAPI} from "../api/api";
import {setStatus} from "./appReducer";

export type MyPost = {
    id: string,
    message: string,
    like: number,
    imgSrc: string
}

export type ProfileType = {
    user: UserProfile | null,
    posts: MyPost[];
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
    user: null,
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
    newUsersProfile: null,
    status: 'Hello world'
}

export const profileReducer = (state: ProfileType = initialState, action: commonActionProfileTypes):ProfileType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            let newMessage: MyPost = {
                id: v1(),
                like: 0,
                message: action.payload.text,
                imgSrc: users[0].imgSrc
            }
            return {...state, posts: [newMessage, ...state.posts]}
        }
        case "profile/SET_USER_PROFILE": {
            return {...state, user: action.payload.user}
        }
        case "profile/CHANGE_USER_STATUS":{
            return {...state, status: action.payload.status}
        }
        case "profile/GET_USER_STATUS":{
            return {...state, status: action.payload.status}
        }
        case "profile/DELETE_POST": {
            return {...state, posts: state.posts.filter(el => el.id !== action.payload.id)}
        }
        case "profile/UPDATE-OWNER-PHOTO": {
            return {...state, user: {...state.user!, photos: {...state.user!.photos, large: action.payload.img}}  }
        }
        default: return state;
    }
    }

export const addPostActionCreator = (text: string) => {
    return {
        type: 'profile/ADD-POST',
        payload: {text}
    } as const
}


export const setUserProfile = (user: UserProfile) => {
    return {
        type: 'profile/SET_USER_PROFILE',
        payload: {user}
    } as const
}

export const changeUserStatusAC = (status: string) => {
    return {
        type: 'profile/CHANGE_USER_STATUS',
        payload: {status}
    } as const
}

export const getUserStatusAC = (status: string) => {
    return {
        type: 'profile/GET_USER_STATUS',
        payload: {status}
    } as const
}

export const deletePostAC = (id: string) => {
    return {
        type: 'profile/DELETE_POST',
        payload: {id}
    } as const
}

export const updateOwnerPhoto = (img: string) => {
    return {
        type: 'profile/UPDATE-OWNER-PHOTO',
        payload: {img}
    } as const
}

type addPostActionCreatorPropsType = ReturnType<typeof addPostActionCreator>;
type setUserProfile = ReturnType<typeof setUserProfile>;
type changeUserStatusAC = ReturnType<typeof changeUserStatusAC>;
type getUserStatusAC  = ReturnType<typeof getUserStatusAC >;
type deletePostAC  = ReturnType<typeof deletePostAC>;
type updateOwnerPhoto  = ReturnType<typeof updateOwnerPhoto>;

export type commonActionProfileTypes = addPostActionCreatorPropsType|
    setUserProfile | changeUserStatusAC| getUserStatusAC | deletePostAC | updateOwnerPhoto;

export function getProfileUserThunk(userID: string) {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('pageLoading'))
        try{
            let data = await profileAPI.downloadUserPage(userID)
            dispatch(setUserProfile(data))
        }
        catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const getUserStatusThunk = (userID: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('pageLoading'))
        try{
            let data = await  profileAPI.getUserStatus(userID)
            dispatch(getUserStatusAC(data))
        }
        catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const changeUserStatusThunk = (newStatus: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await  profileAPI.changeUserStatus(newStatus)
            if(data.data.resultCode === 0){
                dispatch(changeUserStatusAC(newStatus))
            }
        }
        catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const updateOwnerPhotoThunk = (file: File) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await  profileAPI.uploadPhoto(file)
            if(data.data.resultCode === 0){
                dispatch(updateOwnerPhoto(data.data.data.photos.large))
            }
        }
        catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}