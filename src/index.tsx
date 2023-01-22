import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/redux-store';
import {Dialogs, ProfileType} from "./redux/state";


export const RenderAllTree = (state: {profileReducer: ProfileType | undefined, dialogsReducer: Dialogs | undefined}) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} newPostText={state.profileReducer!.newPostText}
            newMessageText = {state.dialogsReducer!.newContent}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderAllTree(store.getState())

store.subscribe(() => {
    RenderAllTree(store.getState())}
);


