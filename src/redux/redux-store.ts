import {combineReducers, createStore} from "redux";
import {profileReducer, ProfileType} from "./profileReducer";
import {dialogsReducer, DialogsType} from "./dialogsReducer";
import {FindPeopleType, findPeopleReducer} from "./findPeopleReducer";

export type State = {
    profile?: ProfileType;
    dialogs?: DialogsType;
    findPeople?: FindPeopleType;
}

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    findPeople: findPeopleReducer
})

export const store = createStore(rootReducer);
