import {AnyAction, applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {commonActionProfileTypes, profileReducer, ProfileType} from "./profileReducer";
import {commonActionDialogsTypes, dialogsReducer, DialogsType} from "./dialogsReducer";
import {FindPeopleType, findPeopleReducer, commonACFindPeopleTypes} from "./findPeopleReducer";
import {authActionsType, authReducer, authStateType} from "./authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appActionsType, appReducer, appReducerType} from "./appReducer";

export type State = {
    profile?: ProfileType;
    dialogs?: DialogsType;
    findPeople?: FindPeopleType;
    auth?: authStateType;
    app?: appReducerType
}

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    findPeople: findPeopleReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


type commonAppActionType = appActionsType
    | authActionsType
    | commonActionDialogsTypes
    | commonActionProfileTypes
    | commonACFindPeopleTypes

export type ApplicationDispatch = ThunkDispatch<RootState, unknown, commonAppActionType>
export type ApplicationActionThunk = ThunkAction<void,RootState, unknown, commonAppActionType>



export const store = createStore(rootReducer, applyMiddleware(thunk));
