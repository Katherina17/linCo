import {
    findPeopleReducer,
    FindPeopleType,
    followAC,
    setCurrentPageAC, setFetchAC,
    setTotalPageAC,
    unFollowAC
} from "./findPeopleReducer";

let initialState: FindPeopleType = {
    items: [],
    totalCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    error: null
}

beforeEach(() => {
        initialState = {
            items: [{
                id: 2,
                name: 'ivan',
                photos: {
                    small: null,
                    large: null,
                },
                followed: false,
                status: null,
                uniqueUrlName: null
            },{
                id: 1,
                name: 'ira',
                photos: {
                    small: null,
                    large: null,
                },
                followed: true,
                status: null,
                uniqueUrlName: null
            },
            ],
            totalCount: 0,
            pageSize: 15,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [],
            error: null,
        }
    }
)

test('follow an user', () => {
    let action = followAC(2);
    let stateAfterTest = findPeopleReducer(initialState, action);

    expect(stateAfterTest.items[0].followed).toBe(true)
    expect(initialState.items[0].followed).toBe(false)
    expect(initialState.items[1].followed).toBe(true)
    expect(stateAfterTest.items[1].followed).toBe(true)
})


test('unfollow an user', () => {
    let action = unFollowAC(1);
    let stateAfterTest = findPeopleReducer(initialState, action);

    expect(stateAfterTest.items[1].followed).toBe(false)
    expect(initialState.items[1].followed).toBe(true)
    expect(initialState.items[0].followed).toBe(false)
    expect(stateAfterTest.items[0].followed).toBe(false)
})


test('set total page', () => {
    let action = setTotalPageAC(20);
    let stateAfterTest = findPeopleReducer(initialState, action);

    expect(stateAfterTest.totalCount).toBe(20)
    expect(initialState.totalCount).toBe(0)
})


test('set the current page', () => {
    let action = setCurrentPageAC(20);
    let stateAfterTest = findPeopleReducer(initialState, action);

    expect(stateAfterTest.currentPage).toBe(20)
    expect(initialState.currentPage).toBe(1)
})

test('set fetch', () => {
    let action = setFetchAC(true);
    let stateAfterTest = findPeopleReducer(initialState, action);

    expect(stateAfterTest.isFetching).toBe(true)
    expect(initialState.isFetching).toBe(false)
})
