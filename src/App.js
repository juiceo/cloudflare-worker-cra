import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>Cloudflare Workers <3 Create React App</h4>
                <p>This app automatically deploys to Cloudflare Workers when pushing to master. Sweet!</p>
            </header>
        </div>
    );
}

export default App;
