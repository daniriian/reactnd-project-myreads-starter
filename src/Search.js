import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        book: PropTypes.array,
        onUpdateBook: PropTypes.func.isRequired
    }

    state = {
        query: '', //empty query string
        books: []  //empty array of books
    }

    updateQuery = (query) => {

        if (!query) {
            this.setState({ query: '', books: [] })
        }
        else {
            this.setState({ query: query.trim() })
            BooksAPI.search(query)
                .then((books) => {
                    if (books.error) { books = [] }
                    //update book shelf for books in search page
                    books.map((book) => (this.props.booksOnShelf.filter((boo) => boo.id === book.id).map(b => book.shelf = b.shelf)))
                    this.setState({ books }) //state includes all books that match the search criteria
                })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.query.length === 0) {
            return false
        }
        return true
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.sort(sortBy('title')).map((book) => (
                                    <Book
                                        key={book.id}
                                        book={book}
                                        onUpdateBook={this.props.onUpdateBook}
                                    />
                                ))
                                }
                            </ol>
                        </div>
                    </ol>
                </div>
            </div>

        )
    }
}

export default Search