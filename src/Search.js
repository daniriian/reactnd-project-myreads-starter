import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import sortBy from 'sort-by'

class Search extends Component {
    state = {
        query: '', //empty query string
        books: []  //empty array of books
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(e)=>this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                this.state.books.map(
                                    book=>(
                                        <p>fdsfsa</p>
                                    )
                                )
                            </ol>
                        </div>
                    </ol>
                </div>
            </div>
            
        )}
}

export default Search