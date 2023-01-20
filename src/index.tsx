import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { State, store} from "./redux/state";

export const RenderAllTree = (state: State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} newPostText={store.getState().profile.newPostText}
            newMessageText = {store.getState().dialogues.newContent}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderAllTree(store.getState())

store.subscriber(RenderAllTree);


