import {combineReducers, createStore} from "redux";
import {profileReducer, ProfileType} from "./profileReducer";
import {dialogsReducer, DialogsType} from "./dialogsReducer";
import {FindPeopleType, findPeopleReducer} from "./findPeopleReducer";
import {authReducer, authStateType} from "./authReducer";

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
    auth: authReducer
})

export const store = createStore(rootReducer);
