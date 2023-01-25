import {commonActionTypes, DialogsType, MessageType, users} from "./state";
import {v1} from "uuid";

const initialState = {
    dialogs: [
        {
            id: v1(),
            currentUser: users[0],
            friendUser: users[1],
            messages: [
                {
                    id: v1(),
                    senderId: users[1].id,
                    content: "Hello, what's up?"
                },
            ],
        }, {
            id: v1(),
            currentUser: users[0],
            friendUser: users[2],
            messages: [
                {
                    id: v1(),
                    senderId: users[2].id,
                    content: "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in."
                },
            ],
        }, {
            id: v1(),
            currentUser: users[0],
            friendUser: users[3],
            messages: [
                {
                    id: v1(),
                    senderId: users[3].id,
                    content: "It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference."
                },
            ],
        },
        {
            id: v1(),
            currentUser: users[0],
            friendUser: users[4],
            messages: [
                {
                    id: v1(),
                    senderId: users[4].id,
                    content: "Started his hearted any civilly."
                },
            ],
        },
    ],
    newContent: ''
}

export const dialogsReducer = (state: DialogsType = initialState, action: commonActionTypes) => {
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
        default: break;
    }
    return state;
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