import {commonActionTypes, Dialogs, MessageType, users} from "./state";
import {v1} from "uuid";

<<<<<<< HEAD
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

export const dialogsReducer = (state: Dialogs = initialState, action: commonActionTypes) => {
=======
export const dialogsReducer = (state: Dialogs, action: commonActionTypes) => {
>>>>>>> 7242b2ddf0c36a9312a4059fb02ba81802815fa9
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
<<<<<<< HEAD
        default: break;
    }
    return state;
=======
    }
>>>>>>> 7242b2ddf0c36a9312a4059fb02ba81802815fa9
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