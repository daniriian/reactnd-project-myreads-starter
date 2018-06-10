import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'
import Search from './Search.js'
import Header from './Header.js'



class BooksApp extends React.Component {
  state = {
    books: []
  }


  moveBookToShelf = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book, shelf)
        .then(() => {
          book.shelf = shelf
          this.setState((state) => ({
            books: state.books.filter(b => b.id !== book.id).concat([book])
          }))
        })
    }
  }

 

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
        console.log(this.state);
      })
  }

  render() {
    
    return (
      <div className="app">
        <Header />
        <BookShelf 
              onUpdateBook={this.moveBookToShelf}
              books={this.state.books}
        />
        <Search />
      </div>
    )
  }
}

export default BooksApp
