import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }
    static propTypes = {
      onAdd: PropTypes.func.isRequired
    };

    onNameChange = (e) => {
        //console.log('onNameChange', e.target.value);
        this.setState({
            name: e.target.value
        })
    };

    onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name);
      this.setState({
          name: ""
      })
    };
    render(){
        return(
            <div className="add-player-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        );
    }
}