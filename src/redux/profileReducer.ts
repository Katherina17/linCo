import {commonActionTypes, MyPost, ProfileType, State, users} from "./state";
import {v1} from "uuid";


export const profileReducer = (state: ProfileType, action: commonActionTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newMessage: MyPost = {
                id: v1(),
                like: 0,
                message: state.newPostText,
                imgSrc: users[0].imgSrc
            }
            state.posts = [newMessage, ...state.posts];
            state.newPostText = '';
            break;
        }
        case 'UPDATE-POST-TEXT': {
            state.newPostText = action.payload;
            break;
        }
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