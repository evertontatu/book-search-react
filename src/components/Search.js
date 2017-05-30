import React, { Component } from 'react';
import Book from './Book';


export default class Search extends Component{

    constructor(){
        super();
        this.state = {books:[]};
        this.state = {posts: []};
    }

    /* Função para receber o valor do campo da pesquisa e realizar a consulta na API */
    search(event){
        event.preventDefault();

        /*Recupera o valor digitado do campo da pesquisa*/
        /*let search = document.getElementById('search').value*/

        /*Utilizando a fetch API para realizar o http request concatenando com o valor digitado*/
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchWord.value}`)
        .then(response => {
            if (response.status >= 400) {
                /*Exibe mensagem de erro caso o servidor retorne algum*/
                throw new Error('Algo deu errado, desculpe :(');
            }
            return response.json()
        }).then(books => {
            this.setState({books:books});
            /*Salvando o array em books.items para realizar o .map*/
            const posts = books.items;
            this.setState({posts});

        }).catch(error => {            
            console.log(error);
        });
    }
    

    render(){
        return (
            <div>
                {/* Adicionando o onSubmit para chamar o metodo da class search fazendo bind para usar o this do React*/}
                <form onSubmit={this.search.bind(this)}>
                    <div className="input-group">
                        <input id="search" type="text" className="form-control" placeholder="Pesquise um livro" ref={input => this.searchWord = input}/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Pesquisar!</button>
                        </span>
                    </div>
                </form>
                <div className="book-results">
                    {/*Executando a função map para caminhar no array posts, enviando o resultado de cada posição como parametro para o component Book*/}
                    {this.state.posts.map(book => <Book key={book.id} book={book}/>)}

                </div>
            </div>
        );
    }
}