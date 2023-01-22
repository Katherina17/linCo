import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {Dialogs, ProfileType} from "./state";

export type State = {
    profileReducer?: ProfileType;
    dialogsReducer?: Dialogs;
}

export const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer
})

export const store = createStore(reducers);
