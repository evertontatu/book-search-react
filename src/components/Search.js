import React, { Component } from 'react';
import Book from './Book';

export default class Search extends Component{

    constructor(){
        super();
        this.state = {books:[]};
        this.state = {posts: []};
    }

    search(event){
        event.preventDefault();

        let search = document.getElementById('search').value
        document.getElementById('results').innerHTML = ""

        fetch('https://www.googleapis.com/books/v1/volumes?q=' + search)
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Algo deu errado, desculpe :(');
            }
            return response.json()
        }).then(books => {
            this.setState({books:books});

            const posts = books.items;
            this.setState({posts});
            console.log(posts.volumeInfo);

            }).catch(error => {
                console.log(error);
            });
    }
    

    render(){
        return (
            <div>
                <form onSubmit={this.search.bind(this)}>
                    <input id="search" type="text" placeholder="Pesquise um livro"/>
                    <input type="submit" value="Pesquisar"/>
                </form>
                <div>
                    <ul>
                        {this.state.posts.map(book =>
                            <li>{book.volumeInfo.title}</li>
                        )}
                    </ul>
                </div>
                <div id="results"></div>
            </div>
        );
    }
}