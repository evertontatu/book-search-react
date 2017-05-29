import React, { Component } from 'react';
import LivroItem from './Livro';


export default class Search extends Component{

    constructor(){
        super();
        this.state = {livros:[]};
    }

    search(event){
        event.preventDefault();
        
        fetch('https://www.googleapis.com/books/v1/volumes?q=${this.term}')
        .then(response => response.json())
        .then(livros => {
            this.setstate({livros:livros});
            console.log(livros);
        });
    }

    render(){
        return (
            <div>
                <div>
                    <form onSubmit={this.search.bind(this)}>
                        <input type="text" ref={(input) => this.term = input} />
                        <input type="submit" value="Pesquisar"/>
                    </form>
                </div>
                <div>
                   {
                        this.state.livros.map(livro => <LivroItem livro={livro} />)
                    }
                </div>
            </div>
        );
    }
}