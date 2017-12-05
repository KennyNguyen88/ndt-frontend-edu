import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import './App.css';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: this.props.initalPlayers
        }
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        initalPlayers: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired
        })).isRequired
    };

    static defaultProps = {
        title: "React Scoreboard"
    };

    onScoreChange = (e,index) => {
        //console.log('onScoreChange', e, index);
        this.state.players[index].score += e;
        this.setState(this.state);
    };

    onPlayerAdd = (name) => {
        //console.log('onPlayerAdd', name);
        this.state.players.push({
            name: name,
            score: 0
        });
        this.setState(this.state);
    };

    onRemovePlayer = (index) => {
        this.state.players.splice(index, 1);
        //console.log('onRemovePlayer', index);
        this.setState(this.state);
    };

    render()  {
        return (
            <div className="scoreboard">
                <Header title={this.props.title} players={this.state.players}/>
                <div className="players">
                    {this.state.players.map((player,index) => {
                        return (
                            <Player
                                    key={player.name}
                                    score={player.score}
                                    name={player.name}
                                    onScoreChange={(e) => {this.onScoreChange(e,index)}}
                                    onRemove={(e) => this.onRemovePlayer(index)}
                            />
                        );
                    }
                    )}
                </div>
                <AddPlayerForm onAdd={this.onPlayerAdd} />
            </div>
        );
    };
}

export default App;
