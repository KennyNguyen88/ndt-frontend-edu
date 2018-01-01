import React from 'react';
import PropTypes from 'prop-types';

export default function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.updatePlayer(props.index,-1)}> -</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick={() => props.updatePlayer(props.index,-1)}> +</button>
        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    updatePlayer: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired

};