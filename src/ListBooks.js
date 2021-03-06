import React, { Component } from 'react'
import PropTypes from 'prop-types' 

class ListBooks extends Component {
  render() {
    console.log(this.props.books)
    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid"> {this.props.books.map( (books) => (
                <li key={books.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${books.imageLinks.thumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title"><a href={books.infoLink}>{books.title}</a></div>
                    <div className="book-title">{books.shelf}</div>
                    <div className="book-authors">{books.authors}</div>
                  </div>
                </li>
              ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks