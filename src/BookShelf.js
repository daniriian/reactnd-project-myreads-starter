import React, { Component } from 'react';
import Book from './Book.js'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }
   
    render() {
        const shelves = ["currentlyReading", "wantToRead", "read"] //the 3 shelves
        const shelfName = ["Currently Reading", "Want To Read", "Read"]//name for the 3 shelves
        return (
            <div>
            {  shelves.map((shelf, index)=>{
                // render books in each shelf
                return (
                    <div key={index} className="list-books-content">
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelfName[index]}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {/* here we put the books */}
                                    {this.props.books.sort(sortBy('title')).filter(book => (book.shelf === shelf)).map((book) => (
                                        <li className="book-list-item" key={book.id}>
                                            <Book book={book} 
                                                  onUpdateBook={this.props.onUpdateBook}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                )
                    
            })
            }
            </div>
        )
    }
}

export default BookShelf