import {v1} from "uuid";
import {AppDispatch, RootState} from "./redux-store";
import {profileAPI} from "../api/api";
import {setStatus} from "./appReducer";
import {stopSubmit} from "redux-form";
import {handleServerAppError} from "utils/handleServerAppError/handleServerAppError";
import {handleServerNetworkError} from "utils/handleServerNetworkError/handleServerNetworkError";

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
    aboutMe: string
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
    status: 'Hello world',

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
            return {...state, user: {...state.user!, photos: {...state.user?.photos, ...action.payload.images}}}
        }
        case "profile/UPDATE-USER-INFO":{
            return {... state, user: action.payload.userInfo}
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

export const updateOwnerPhoto = (images: {large: string, small: string}) => {
    return {
        type: 'profile/UPDATE-OWNER-PHOTO',
        payload: {images}
    } as const
}

export const updateProfileUserInfo = (userInfo: UserProfile) => {
    return {
        type: 'profile/UPDATE-USER-INFO',
        payload: {userInfo}
    } as const
}

type addPostActionCreatorPropsType = ReturnType<typeof addPostActionCreator>;
type setUserProfile = ReturnType<typeof setUserProfile>;
type changeUserStatusAC = ReturnType<typeof changeUserStatusAC>;
type getUserStatusAC  = ReturnType<typeof getUserStatusAC >;
type deletePostAC  = ReturnType<typeof deletePostAC>;
type updateOwnerPhoto  = ReturnType<typeof updateOwnerPhoto>;
type updateProfileUserInfo  = ReturnType<typeof updateProfileUserInfo>;

export type commonActionProfileTypes = addPostActionCreatorPropsType
    | setUserProfile
    | changeUserStatusAC
    | getUserStatusAC
    | deletePostAC
    | updateOwnerPhoto
    | updateProfileUserInfo;

export function getProfileUserThunk(userID: string) {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('pageLoading'))
        try {
            let data = await profileAPI.downloadUserPage(userID)
            dispatch(setUserProfile(data))
        } catch (e) {
            handleServerNetworkError(e, dispatch)
        } finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const getUserStatusThunk = (userID: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('pageLoading'))
        try {
            let data = await profileAPI.getUserStatus(userID)
            dispatch(getUserStatusAC(data))
        } catch (e) {
            handleServerNetworkError(e, dispatch)
        } finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const changeUserStatusThunk = (newStatus: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setStatus('loading'))
        try {
            let data = await profileAPI.changeUserStatus(newStatus)
            if (data.data.resultCode === 0) {
                dispatch(changeUserStatusAC(newStatus))
            } else {
                handleServerAppError(data.data, dispatch)
            }
        } catch (e) {
            handleServerNetworkError(e, dispatch)
        } finally {
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
                dispatch(updateOwnerPhoto(data.data.data.photos))
            } else {
                handleServerAppError(data.data, dispatch)
            }
        }
        catch (e) {
            handleServerNetworkError(e, dispatch)
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}

export const updateProfileInfoThunk = (profileFormData:  UserProfile) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(setStatus('loading'))
        try {
            const user: UserProfile  = getState().profile.user!
            const updateUser: UserProfile  = {...user,
                fullName: profileFormData.fullName,
                lookingForAJob: profileFormData.lookingForAJob, aboutMe: profileFormData.aboutMe,
                lookingForAJobDescription: profileFormData.lookingForAJobDescription,
                contacts: {...user.contacts, ...profileFormData.contacts}}
            let data = await  profileAPI.updateUserInfo(updateUser)
            if(data.data.resultCode === 0){
                dispatch(updateProfileUserInfo(updateUser))
            } else {
                if (data.data.messages.length){
                    data.data.messages.map((el: string) => {
                        let contacts = el.slice(20, 27).toLowerCase()+'s';
                        let socialNetwork =el.slice(30, el.length-1).toLowerCase();
                        dispatch(stopSubmit('profileFormData', {[contacts]: {[socialNetwork]: el}}))
                        throw Error;
                    })
                } else {
                    handleServerAppError(data.data, dispatch)
                }
            }
        }
        catch (e) {
            handleServerNetworkError(e, dispatch)
            throw Error;
        }
        finally {
            dispatch(setStatus('idle'))
        }
    }
}