import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/redux-store';
import {DialogsType, ProfileType} from "./redux/state";


export const RenderAllTree = (state: {profile: ProfileType | undefined, dialogs: DialogsType | undefined}) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderAllTree(store.getState())

store.subscribe(() => {
    RenderAllTree(store.getState())}
);

