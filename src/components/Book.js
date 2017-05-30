import React, { Component } from 'react';
import '../css/Book.css';

export default class Book extends Component {

    render(){
        return(
            <div>
                {/*Recebendo o item do array com a variável props para acessar os objetos/propriedades do json*/}
                <a href={this.props.book.volumeInfo.infoLink}>
                    <div className="book-box">
                        {/*<img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title}/>*/}
                        <h3>{this.props.book.volumeInfo.title}</h3>
                        <p>{this.props.book.publisher}</p>
                    </div>
                </a>
            </div>
        );
    }
}