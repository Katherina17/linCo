import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, commonActionTypes, State} from './redux/state';
import {Friends} from "./components/Friends/Friends";


type AppPropsType = {
    state: State;
    newPostText: string;
    newMessageText: string;
    dispatch: (action: commonActionTypes) => void;
}

function App(props: AppPropsType) {
  return (
          <div className="App-container">
              <Header/>
              <main>
                  <div className="App_wrapper menu_user_container">
                      <NavBar/>
                      <Redirect from="/" to="/profile" />
                      <Route path={'/profile'} render={() => <Profile profile={props.state.profile} dispatch={props.dispatch} newPostText={props.newPostText}/>}/>
                      <Route path={'/friends'} render={() => <Friends friends={props.state.profile.user.friends}/>}/>
                      <Route path={'/dialogs'} render={() => <Dialogs dialogues={props.state.dialogues.dialogs } dispatch={props.dispatch} newMessageText={props.newMessageText}/>}/>
                      <Route path={'/news'} component={News}/>
                      <Route path={'/music'} component={Music}/>
                      <Route path={'/settings'} component={Settings}/>
                  </div>
              </main>
          </div>
  );
}

export default App;
