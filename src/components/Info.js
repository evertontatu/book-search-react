import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Info extends Component {

    render(){
        return(
            <div>
                <Link to={this.props.book.id}>+ Mais Informações</Link>
            </div>
        );
    }
}