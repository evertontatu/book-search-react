import React, { Component } from 'react';
import '../css/Book.css';
import Info from './Info';
import Favorite from './Favorite';

export default class Book extends Component {

    render(){
        return(
            <div>
                {/*Recebendo o item do array com a variável props para acessar os objetos/propriedades do json*/}
                <div className="book-box">
                    <div>
                        <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title}/>                        
                    </div>
                    <div>
                        <h3>{this.props.book.volumeInfo.title}</h3>
                        <p>Ano de lançamento: {this.props.book.volumeInfo.publishedDate}</p>
                        <p>{this.props.book.volumeInfo.pageCount} páginas</p>

                        <p className="box-book-description">{this.props.book.volumeInfo.description}</p>
                    </div>
                    <div>
                        <Info key={this.props.book.id} book={this.props.book}/>
                        <Favorite/>
                    </div>                
                </div>
            </div>
        );
    }
}