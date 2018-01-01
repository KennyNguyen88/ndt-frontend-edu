import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import '../components/App.css';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as PlayerActionCreators from '../actions/player';
class App extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        players: PropTypes.array.isRequired
    };

    static defaultProps = {
        title: "React Scoreboard"
    };

    render()  {

        const {dispatch, players} = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayer = bindActionCreators(PlayerActionCreators.updatePlayer, dispatch);

        const playerComponents = players.map((player, index) => (
           <Player
            index={index}
            name={player.name}
            score={player.score}
            key={player.name}
            updatePlayer={updatePlayer}
            removePlayer={removePlayer}
           />
        ));


        return (
            <div className="scoreboard">
                <Header title={this.props.title} players={players}/>
                <div className="players">
                    {playerComponents}
                </div>
                <AddPlayerForm addPlayer={addPlayer} />
            </div>
        );
    };
}

const mapStateToProps = state => (
    {
        players: state
    }
);

export default connect(mapStateToProps)(App);
