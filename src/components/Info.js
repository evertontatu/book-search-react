import React, { Component } from 'react';

export default class Info extends Component {

    render(){
        return(
            <div>
                <a href={this.props.book.id}>Mais Informações</a>
            </div>
        );
    }
}