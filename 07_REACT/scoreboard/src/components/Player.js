import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';
/*
export default class Player extends Component {
    // constructor(props){
    //     super(props);
    // }

    static propTypes = {
        score: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        onScoreChange: PropTypes.func.isRequired
    };

    render(){
        return(
            <div className="player">
                <div className="player-name"> {this.props.name}</div>
                <div className="player-score">
                    <Counter score={this.props.score} />
                </div>
            </div>
        );
    };
}
*/
export default function Player(props){
    return (
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={props.onRemove}>x</a>
                {props.name}
            </div>
            <div className="player-score">
                <Counter score={props.score} onChange={(e) => props.onScoreChange(e)}/>
            </div>
        </div>
    );
}

Player.PropTypes = {
    score: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};