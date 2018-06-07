import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
        console.log(this.state);
      })

  }

  render() {


    const shelves = [

    ]

    return (
      <div className="app">

        {/* here will display de shelves with books*/}
        <BookShelf books={this.state.books} />

      </div>
    )
  }
}

export default BooksApp
