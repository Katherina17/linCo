import axios from "axios";

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
    login(email: string, password: string, rememberMe: boolean){
        return instance.post('auth/login', {email, password, rememberMe}).then(res => res.data)
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

