import React from 'react';

export default class Favorite extends React.Component {

  favorite(event){
    event.preventDefault();

    console.log(this.props.book.id);
  }

  render() {
    return (
        <div>
            <a onClick={this.favorite.bind(this)}>Salvar favoritos</a>
        </div>
    );
  }
}