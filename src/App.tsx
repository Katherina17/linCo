import React from 'react';
import './App.css';
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App-container">
         <header>
             <div className="App-wrapper">
                 <div className="logo-header">
                     <img src={logo} alt='logo'/>
                 </div>
             </div>
         </header>
            <main>
                <div className="App-wrapper menu-user-container">
                    <nav className="nav-bar">
                        <ul className="nav-list  ">
                            <li> <a href="#"> Profile </a></li>
                            <li> <a href="#">Messages </a></li>
                            <li> <a href="#">News </a></li>
                            <li> <a href="#">Music </a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </nav>
                        <div className="main-container">
                            <img src="https://cdn1.epicgames.com/ue/product/Screenshot/1-1920x1080-dab564274b400e044d6641ad755ee628.jpg?resize=1&w=1920" alt="landscape"/>
                            <p>Ava + description</p>
                            <p>My posts</p>
                            <p>New post</p>
                            <p>post1</p>
                            <p>post2</p>
                        </div>
                </div>
            </main>
    </div>
  );
}

export default App;
