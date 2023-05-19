import axios from "axios";
import {UserProfile} from "../redux/profileReducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : '43a60f90-0234-478e-9be6-fcfce5403846'}
})

export const userAPI = {
    getUsers(pageSize: number, currentPage: number) {
       return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                    return response.data
                }
            )

    },
}

export const profileAPI = {
    downloadUserPage(userID: string) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                    return response.data
                }
            )

    },
    getUserStatus(userID: string){
        return instance.get(`profile/status/${userID}`)
            .then(response => {
                    return response.data
                }
            )
    },
    changeUserStatus(newStatus: string){
        return instance.put('profile/status', {status: newStatus})
    },
    uploadPhoto(file: File){
        const formData = new FormData();
        formData.append("image", file);

        return instance.put('profile/photo', formData, { headers:
                {"Content-Type": "multipart/form-data"}
        })
    },
    updateUserInfo(userProfile: UserProfile){
        return instance.put('profile', userProfile)
    }
}

export const authAPI = {
    authMeAPI() {
        return instance.get('auth/me')
            .then(response => {
                    return response.data
                }
            )
    },
    login(email: string, password: string, rememberMe: boolean, captcha?:string){
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logOut(){
        return instance.delete('auth/login').then(res => res.data)
    }

}



export const followAPI = {
    followUser(userID: number) {
        return instance.post(`follow/${userID}`)
            .then(response => {
                    return response
                }
            )
    },
    unFollowUser(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                    return response
                }
            )
    },
}

export const securityAPI = {
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    }
}

export type ResponseType<T = {}> = {
    messages: string[]
    resultCode: number
    data: T
    fieldsErrors: FieldErrorType[]
}

export type FieldErrorType = {
    error: string
    field: string
}

