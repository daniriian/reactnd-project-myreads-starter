import React, {Component} from 'react'
import PropTypes from 'prop-types'
//Book component
class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    updateBook (selectOption) {
        this.props.onUpdateBook(this.props.book, selectOption)
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        //book cover
                        backgroundImage: `url(${this.props.book.imageLinks!==undefined ? this.props.book.imageLinks.thumbnail: ''}` }}>
                    </div>
                    <div className="book-shelf-changer">
                    {/* book shelf changer */}
                        <select value={this.props.book.shelf === undefined ? "none" : this.props.book.shelf} onChange={(e)=>this.updateBook(e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                {/* book title */}
                <div className="book-title">{this.props.book.title}</div>
                {/* book authors */}
                <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book