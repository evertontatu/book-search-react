import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class BookInfo extends Component {

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Google Books Search</h1>
                    </div>
                </div>
                <div className="container">
                    <h1>Book Info</h1>
                    <p>Desculpe</p>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}