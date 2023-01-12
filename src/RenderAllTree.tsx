import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {State} from "./redux/state";
import {addPost} from "./redux/state";

export const RenderAllTree = (state: State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
