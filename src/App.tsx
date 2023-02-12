import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {State} from './redux/redux-store'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {FindPeopleContainer} from "./components/FindPeople/FindPeopleContainer";




type AppPropsType = {
    state: State;
}

function App(props: AppPropsType) {
  return (
          <div className="App-container">
              <Header/>
              <main>
                  <div className="App_wrapper menu_user_container">
                      <NavBar/>
                      <Redirect from="/" to="/profile" />
                      <Route path={'/profile'} render={() => <Profile profile={props.state.profile!}/>}/>
                      <Route path={'/findPeople'} render={() => <FindPeopleContainer/>}/>
                      <Route path={'/friends'} render={() => <Friends friends={props.state.profile!.user.friends}/>}/>
                      <Route path={'/dialogs'} render={() => <Dialogs dialogues={props.state.dialogs!.dialogs}/>}/>
                      <Route path={'/news'} component={News}/>
                      <Route path={'/music'} component={Music}/>
                      <Route path={'/settings'} component={Settings}/>
                  </div>
              </main>
          </div>
  );
}

export default App;
