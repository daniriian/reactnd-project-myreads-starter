import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'
import Search from './Search.js'



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
    
    return (
      <div className="app">
        {/* here will display de shelves with books*/}
        <BookShelf books={this.state.books}/>
        <Search />
      </div>
    )
  }
}

export default BooksApp
