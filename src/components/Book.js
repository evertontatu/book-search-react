import React, { Component } from 'react';
import '../css/Book.css';
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
                        <p>N° de páginas: {this.props.book.volumeInfo.pageCount}</p>
                        <p className="book-box-description">{this.props.book.volumeInfo.description}</p>
                    </div>
                    <div>
                        <a href={this.props.book.volumeInfo.infoLink}> <button type="button" className="btn btn-primary">Mais Informações</button> </a>
                        <Favorite/>
                    </div>                
                </div>
            </div>
        );
    }
}