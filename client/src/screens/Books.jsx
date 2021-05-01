import React from 'react'
import {Link} from 'react-router-dom'
export default function Books(props) {
  const { books } = props;
  return (
    <div>
      <h3>Books</h3>
      {books.map(book => (
        <Link to={`/books/${book.id}`}><div className='bookCard' key={book.id}>
          <img src={book.img_url} />
          {book.title}
          {book.author}</div></Link>
      ))}
    </div>
  )
}