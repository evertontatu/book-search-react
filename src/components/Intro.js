import React, { Component } from 'react';
import Book from './Livro';

export default class Intro extends Component{

    constructor(){
        super();
        this.state = {livros:[]};
    }
    
    search(event){
        event.preventDefault();

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.term}`)
        .then(response => response.json())
        .then(livros => {
            this.setState({livros:livros});
            console.log(livros);
        }).catch(function(err) {
            console.log("erro");
        });

    }

    render(){
        return (
            <div>
                {
                    this.state.livros.map(items => <LivroItem livro={livro} />)
                }
            </div>
        );
    }
}