import React from 'react';
import PropTypes from 'prop-types';
/*
export default class Counter extends  Component{
    constructor(props){
        super(props);
        this.state = {
            score: this.props.initialScore
        }
    }

    static propTypes = {
        initialScore: PropTypes.number.isRequired
    };

    incrementScore = () => {
        this.setState({
            score: (this.state.score) + 1
        })
    };
    decrementScore = () => {
        this.setState({
            score: (this.state.score) - 1
        })
    };

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> -</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}> +</button>
            </div>
        );
    }
}
*/
export default function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.onChange(-1)}> -</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick={() => props.onChange(1)}> +</button>
        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired

};