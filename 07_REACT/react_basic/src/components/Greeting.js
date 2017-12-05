import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn){
            return(
                <h1>Welcome back !</h1>
            )
        }
        return <h1>Please sign up!</h1>
    }


}

export default Greeting;