import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>Wrangler React Template</h4>
                <p>Which automatically deploys to a Cloudflare worker when pushing to master. Sweet!</p>
            </header>
        </div>
    );
}

export default App;
