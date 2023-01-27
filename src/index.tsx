import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from "react-redux";
import {ProfileType} from "./redux/profileReducer";
import {DialogsType} from "./redux/dialogsReducer";

type RenderAllTreeStateType = {
    profile: ProfileType | undefined;
    dialogs: DialogsType | undefined;
}

export const RenderAllTree = (state: RenderAllTreeStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state}/>
            </Provider >
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderAllTree(store.getState())

store.subscribe(() => {
    RenderAllTree(store.getState())}
);

