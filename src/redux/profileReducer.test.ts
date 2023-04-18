import {v1} from "uuid";
import {
    addPostActionCreator,
    changeUserStatusAC, deletePostAC, getUserStatusAC,
    profileReducer,
    ProfileType,
    setUserProfile,
    users
} from "./profileReducer";

let firstId = v1()

let initialState : ProfileType = {
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
    status: 'Hello world'
}


beforeEach(() => {

    initialState =  {
        user: null,
        posts: [
            {
                id: firstId,
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
        status: 'Hello world'
    }
})

test('post should be added', () => {
    let action = addPostActionCreator('hello');
    let stateAfterTest = profileReducer(initialState, action)

    expect(stateAfterTest.posts.length).toBe(4)
    expect(initialState.posts.length).toBe(3)
    expect(stateAfterTest.posts[0].message).toBe('hello')
})


test('set userProfile', () => {
    let userProfile = {
        userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'string',
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null ,
            large: null,
        }
    }

    let action =  setUserProfile(userProfile);
    let stateAfterTest = profileReducer(initialState, action)

    expect(stateAfterTest.newUsersProfile?.userId).toBe(2)
    expect(initialState.newUsersProfile).toBe(null)

})


test('change the user status', () => {
    let action =  changeUserStatusAC('i feel good')
    let stateAfterTest = profileReducer(initialState, action)

    expect(stateAfterTest.status).toBe('i feel good')
    expect(initialState.status).toBe('Hello world')
})

test('get the user status', () => {
    let action = getUserStatusAC('i feel good')
    let stateAfterTest = profileReducer(initialState, action)

    expect(stateAfterTest.status).toBe('i feel good')
    expect(initialState.status).toBe('Hello world')
})

test('delete the post', () => {
    let action = deletePostAC(firstId)
    let stateAfterTest = profileReducer(initialState, action)

    expect(stateAfterTest.posts.length).toBe(2)
    expect(initialState.posts.length).toBe(3)
    expect(stateAfterTest.posts[0].message).toBe('Today we do nothing')
})

