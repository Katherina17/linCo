import {v1} from "uuid";

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

type addPostActionCreatorPropsType = ReturnType<typeof addPostActionCreator>;
type updatePostTextActionCreatorType = ReturnType<typeof updatePostTextActionCreator>;

export type commonActionProfileTypes = addPostActionCreatorPropsType| updatePostTextActionCreatorType;