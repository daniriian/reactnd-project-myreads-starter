import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'
import Book from './Book.js'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        // title: PropTypes.string.isRequired,
        // changeStatus: PropTypes.func.isRequired,
        // getBookShelf: PropTypes.func.isRequired
    };
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         shelf: ["currentlyReading", "wantToRead", "read"]
    //     }
    // }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* here we put the books */}
                        
                        {this.props.books.filter(book => (book.shelf === this.props.shelf)).map((book) => (
                            <li className="book-list-item" key={book.id}>
                                <Book book={book} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf

