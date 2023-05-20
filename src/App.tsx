import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {RootState, State} from './redux/redux-store'
import {DialogsContainer} from "./components/Dialogs/Dialogs";
import FindPeopleContainer from "./components/FindPeople/FindPeopleContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import { AuthorizationContainer} from "./components/Authorization/Authorization";
import ProfileContainer from './components/Profile/ProfileC'
import {compose} from "redux";
import {connect} from "react-redux";
import {getInitializedApp, RequestStatusType} from "./redux/appReducer";
import CircularProgress from "@mui/material/CircularProgress";
import {NavBarContainer} from "./components/NavBar/NavBar";
import LinearProgress from '@mui/material/LinearProgress';
import {NotFoundPage} from "components/NotFoundPage/NotFoundPage";
import {ErrorSnackBar} from "components/ErrorSnackbar/ErrorSnakbar";

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
                {this.props.status === 'loading' && <LinearProgress color={'secondary'}/>}
                <HeaderContainer/>
                <main>
                    <div className="App_wrapper menu_user_container">
                        <NavBarContainer/>
                        <Switch>
                            <Route exact path={'/'} render={() => <ProfileContainer/>}/>
                            <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/findPeople'} render={() => <FindPeopleContainer/>}/>
                            <Route path={'/friends'} component={Friends}/>
                            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/settings'} component={Settings}/>
                            <Route path={'/login'} component={AuthorizationContainer}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>
                </main>
                <ErrorSnackBar/>
            </div>
        );
    }
}

type mapStateToProps = {
    initialized: boolean,
    status: RequestStatusType
}

const mapStateToProps = (state: RootState): mapStateToProps => {
    return {
        initialized: state.app.initialized,
        status: state.app.status
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {getInitializedApp}), withRouter
)(App);
