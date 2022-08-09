import React from 'react';
import { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
    }

    render() {
        return (<div>
            <h1>Search:</h1>
            <input onChange={this.props.onChangeHandler} type='search' placeholder={this.props.placeholder} />
        </div>)
    }
}


export default Search;