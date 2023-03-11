import {v1} from "uuid";
import {UserType, users} from "./profileReducer";

export type MessageType = {
    id: string;
    senderId: string;
    content: string;
}

export type DialogType = {
    id: string;
    currentUser: UserType;
    friendUser: UserType;
    messages: MessageType[];
}

export type DialogsType = {
    dialogs: DialogType[];
}

const initialState: DialogsType = {
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
}

export const dialogsReducer = (state: DialogsType = initialState, action: commonActionDialogsTypes):DialogsType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE": {
            let newMessage: MessageType = {
                id: v1(),
                senderId: users[0].id,
                content: action.payload.newMessage
            }
            return {...state, dialogs: state.dialogs.map((el, index) => index === 0 ? {...el, messages: [...el.messages, newMessage]} : el)}
        }

        default: return state;
    }
    }


export const addNewMessageActionCreator = (newMessage: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        payload: {newMessage}
    } as const
}

type addNewMessageActionCreator = ReturnType<typeof addNewMessageActionCreator>;
export type commonActionDialogsTypes = addNewMessageActionCreator
