import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";


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
