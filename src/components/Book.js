import React, { Component } from 'react';

export default class Book extends Component {
    render(){
        return(
            <div>
                <h2>Livro</h2>
                {this.props.volumeInfo.title}
                <br/>
            </div>
            
        );
    }
}