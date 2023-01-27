import {combineReducers, createStore} from "redux";
import {profileReducer, ProfileType} from "./profileReducer";
import {dialogsReducer, DialogsType} from "./dialogsReducer";

export type State = {
    profile?: ProfileType;
    dialogs?: DialogsType;
}

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

export const store = createStore(rootReducer);
