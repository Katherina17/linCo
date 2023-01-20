import {v1} from "uuid";
export type MessageType = {
    id: string;
    senderId: string;
    content: string;
}

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

export type DialogType = {
    id: string;
    currentUser: UserType;
    friendUser: UserType;
    messages: MessageType[];
}

export type State = {
    profile: ProfileType;
    dialogues: DialogType[];
}

const users: UserType[] = [
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

export type ActionType = {
    type: string;
    payload: string;
}

type Store = {
    _state: State;
    getState: () => State;
    _callSubscriber: (state: State) => void;
    updatePostText: (text: string) => void;
    addPost: () => void;
    subscriber: (callback: (state: State) => void) => void;
    dispatch: (action: ActionType) => void;
}

 export const store: Store = {
    _state: {
        profile: {
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
                },
        dialogues: [
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
            }
        ],
        },
     getState(){
         return this._state;
     },
     _callSubscriber(state: State){
     },
     subscriber(callback){
         this._callSubscriber = callback;
     },
     updatePostText(text: string) {
         this._state.profile.newPostText= text;
         this._callSubscriber(this._state);
     },
     addPost() {
         /*let newMessage: MyPost = {
             id: v1(),
             like: 0,
             message: this._state.profile.newPostText,
             imgSrc: users[0].imgSrc
         }
         this._state.profile.posts= [newMessage, ...this._state.profile.posts];
         this._state.profile.newPostText = '';
         this._callSubscriber(this._state);*/
     },
     dispatch(action: ActionType){
        switch (action.type){
            case 'ADD-POST': {
                let newMessage: MyPost = {
                    id: v1(),
                    like: 0,
                    message: this._state.profile.newPostText,
                    imgSrc: users[0].imgSrc
                }
                this._state.profile.posts= [newMessage, ...this._state.profile.posts];
                this._state.profile.newPostText = '';
                this._callSubscriber(this._state);
                break;
            }
            case 'UPDATE-POST-TEXT': {
                this._state.profile.newPostText= action.payload;
                this._callSubscriber(this._state);
                break;
            }
        }
     }
}
