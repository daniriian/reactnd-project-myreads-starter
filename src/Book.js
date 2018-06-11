import React from 'react'
import PropTypes from 'prop-types'
//Book component - this is a functional component
const Book = ({ book, onUpdateBook }) => {
    var updateBook = (selectOption) => { onUpdateBook(book, selectOption) }
    const styles = { width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''}` }
    return (
        < div className="book" >
            <div className="book-top">
                <div className="book-cover" style={styles}>
                </div>
                <div className="book-shelf-changer">
                    {/* book shelf changer */}
                    <select value={book.shelf === undefined ? "none" : book.shelf} onChange={(e) => updateBook(e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            {/* book title */}
            <div className="book-title" > {book.title}</div>
            {/* book authors */}
            < div className="book-authors" > {book.authors ? book.authors.join(', ') : ''}</div >
        </div >
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default Book;