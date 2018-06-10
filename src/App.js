import React from 'react'
import './App.css'
import BookShelf from './BookShelf.js'
import Search from './Search.js'
import Header from './Header.js'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  
  state = {
    books: [] 
  }

  //render book in shelf selected in shelfchanger
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

 
  // add books from BooksAPI
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  render() {
    
    return (
      <div className="app">

        <Route exact path="/" render={()=> (
          <div className="list-books">
            <Header />
            <BookShelf
              onUpdateBook={this.moveBookToShelf}
              books={this.state.books} 
            />

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

          </div>
          )}/>

        
        <Route path="/search" render={() => (
          <Search
            onUpdateBook={this.moveBookToShelf}
            booksOnShelf={this.state.books}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
