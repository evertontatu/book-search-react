import React, { Component } from 'react';
import LivroItem from './Livro';

export default class Intro extends Component{

    constructor(){
        super();
        this.state = {livros:[]};
    }


    render(){
        return (
            <div>
                {
                    this.state.livros.map(livro => <LivroItem livro={livro} />)
                }
            </div>
        );
    }
}