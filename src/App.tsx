import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {state} from './redux/state';



function App() {
  return (
      <BrowserRouter>
          <div className="App-container">
              <Header/>
              <main>
                  <div className="App_wrapper menu_user_container">
                      <NavBar/>
                      <Route path={'/profile'} render={() => <Profile profile={state.profile}/>}/>
                      <Route path={'/dialogs'} render={() => <Dialogs dialogues={state.dialogues}/>}/>
                      <Route path={'/news'} component={News}/>
                      <Route path={'/music'} component={Music}/>
                      <Route path={'/settings'} component={Settings}/>
                  </div>
              </main>
          </div>
      </BrowserRouter>
  );
}

export default App;
