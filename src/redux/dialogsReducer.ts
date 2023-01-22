import {commonActionTypes, Dialogs, MessageType, users} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (state: Dialogs, action: commonActionTypes) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE": {
            let newMessage: MessageType = {
                id: v1(),
                senderId: users[0].id,
                content: state.newContent
            }
            state.dialogs[0].messages = [...state.dialogs[0].messages, newMessage,];
            state.newContent = '';
            break;
        }
        case "UPDATE-MESSAGE-TEXT": {
            state.newContent = action.payload.newMessage;
            break;
        }
    }
}

export const addNewMessageActionCreator = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    } as const
}

export const updateMessageActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        payload: {
            newMessage
        }
    } as const
}