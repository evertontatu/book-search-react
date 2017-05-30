import React, { Component } from 'react';
import $ from 'jquery';

export default class Search extends Component{

    constructor(){
        super();
        this.state = {livros:[]};
    }

    search(event){
        event.preventDefault();

        let search = document.getElementById('search').value
        document.getElementById('results').innerHTML = ""
        console.log(search)

        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
            dataType: "json",

            success: function(data){
                console.log(data)
            },
            type: 'GET'
        });
    }
    

    render(){
        return (
            <div>
                <input id="search" type="text"  placeholder="Pesquise um livro"/>
                <button id="button" type="button">Pesquisar</button>
                <div id="results"></div>
            </div>
        );
    }
}