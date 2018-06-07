import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        // title: PropTypes.string.isRequired,
        // changeStatus: PropTypes.func.isRequired,
        // getBookShelf: PropTypes.func.isRequired
    };

    render() {

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* //here we put the books */}
                        {this.props.books.map((book) => (
                            <li className="book-list-item" key={book.id}>
                                <div className="book">
                                    {book.title}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf