import {AnyAction, applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {profileReducer, ProfileType} from "./profileReducer";
import {dialogsReducer, DialogsType} from "./dialogsReducer";
import {FindPeopleType, findPeopleReducer} from "./findPeopleReducer";
import {authReducer, authStateType} from "./authReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

export type State = {
    profile?: ProfileType;
    dialogs?: DialogsType;
    findPeople?: FindPeopleType;
    auth?: authStateType
}

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    findPeople: findPeopleReducer,
    auth: authReducer,
    form: formReducer
})

export type AppDispatch = typeof store.dispatch

export type ApplicationDispatch = ThunkDispatch<State, void, AnyAction> & Dispatch



export const store = createStore(rootReducer, applyMiddleware(thunk));
