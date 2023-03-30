import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Redirect, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {FriendContainer} from "./components/Friends/Friends";
import {RootState, State} from './redux/redux-store'
import {DialogsContainer} from "./components/Dialogs/Dialogs";
import FindPeopleContainer from "./components/FindPeople/FindPeopleContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import { AuthorizationContainer} from "./components/Authorization/Authorization";
import ProfileContainer from './components/Profile/ProfileC'
import {compose} from "redux";
import {connect} from "react-redux";
import {getInitializedApp} from "./redux/appReducer";
import CircularProgress from "@mui/material/CircularProgress";

type AppPropsType = {
    state: State;
    getInitializedApp: () => void;
} & mapStateToProps

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.getInitializedApp()
    }

    render() {
        if(!this.props.initialized){
            return <CircularProgress/>
        }
        return (
            <div className="App-container">
                <HeaderContainer/>
                <main>
                    <div className="App_wrapper menu_user_container">
                        <NavBar/>
                        <Route exact path={'/'} render={() => <ProfileContainer/>}/>
                        <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/findPeople'} render={() => <FindPeopleContainer/>}/>
                        <Route path={'/friends'} render={() => <FriendContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                        <Route path={'/login'} component={AuthorizationContainer}/>
                    </div>
                </main>
            </div>
        );
    }
}

type mapStateToProps = {
    initialized: boolean
}

const mapStateToProps = (state: RootState): mapStateToProps => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {getInitializedApp}), withRouter
)(App);
