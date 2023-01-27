import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/redux-store';
import {DialogsType, ProfileType} from "./redux/state";
import {StoreContext} from "./redux/StoreContext";


export const RenderAllTree = (state: {profile: ProfileType | undefined, dialogs: DialogsType | undefined}) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}  >
                <App state={state}/>
            </StoreContext.Provider >
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderAllTree(store.getState())

store.subscribe(() => {
    RenderAllTree(store.getState())}
);

