import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';

export default function Player(props){
    return (
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={() => props.removePlayer(props.index)}>x</a>
                {props.name}
            </div>
            <div className="player-score">
                <Counter
                    index={props.index}
                    score={props.score}
                    updatePlayer={props.updatePlayer}
                />
            </div>
        </div>
    );
}

Player.PropTypes = {
    score: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    updatePlayer: PropTypes.func.isRequired
};