import React, {Component} from 'react';
export default class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            running: false,
            elapsedTime: 0,
            previousTime: 0
        }
    }

    onStop = () => {
        this.setState({
            running: false
        })
    };

    onStart = () => {
        this.setState({
            running: true,
            previousTime: Date.now()
        })
    };

    onTick = () => {
        if(this.state.running){
            var now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            })
        }
    };

    onReset = () => {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        })

    };

    componentDidMount()  {
      this.interval = setInterval(this.onTick,100);
    };

    componentWillMount() {
      clearInterval(this.interval);
    };

    render(){

        var startStop;
        if (this.state.running){
            startStop = <button onClick={this.onStop}>Stop</button>;
        }else{
            startStop = <button onClick={this.onStart}>Start</button>;
        }

        var seconds = Math.floor(this.state.elapsedTime / 1000);

        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{seconds}</div>
                {startStop}
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}
