import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="App-container">
        <Header/>
        <main>
                <div className="App_wrapper menu_user_container">
                    <NavBar/>
                    <Profile/>
                </div>
            </main>
    </div>
  );
}

export default App;
