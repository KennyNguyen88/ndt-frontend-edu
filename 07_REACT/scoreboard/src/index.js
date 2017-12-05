import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

var PLAYERS = [
    {
        name: "Jim Hoskins",
        score: 31
    },
    {
        name: "Andrew Chalkey",
        score: 33
    },
    {
        name: "Alena Holligan",
        score: 42
    }
];

ReactDOM.render(<App initalPlayers={PLAYERS} />, document.getElementById('root'));
registerServiceWorker();
