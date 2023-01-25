import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {DialogsType, ProfileType} from "./state";

export type State = {
    profile?: ProfileType;
    dialogs?: DialogsType;
}

export const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
})

export const store = createStore(reducers);
