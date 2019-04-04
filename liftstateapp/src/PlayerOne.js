import React, { Component } from 'react';



class PlayerOne extends Component{
    constructor(props){
        super(props);
    }


    //this pulls in the properties frim the updatethis counter and updatess the state back to the parent
    render() {
        return <button onClick={this.props.updatethiscounter}>1pt</button>
    }
}

export default PlayerOne;