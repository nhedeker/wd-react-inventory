import Book from 'components/book';
import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      books: [{
        author: 'George R. R. Martin',
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
        isbn: '978-0553103547',
        stock: 7,
        title: 'A Game of Thrones',
        year: 1996
      }, {
        author: 'Neal Stephenson',
        cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
        isbn: '978-1491515051',
        stock: 3,
        title: 'Snow Crash',
        year: 1992
      }, {
        author: 'Andy Weir',
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
        isbn: '978-0804139021',
        stock: 11,
        title: 'The Martian',
        year: 2014
      }]
    };
  },

  increaseStock(book) {
    if (book.stock === 999) {
      return;
    }

    const nextBooks = this.state.books.map((element) => {
      if (book !== element) {
        return element;
      }

      const nextStock = book.stock + 1;

      const nextBook = Object.assign({}, book, { stock: nextStock });

      return nextBook;
    });

    this.setState({ books: nextBooks });
  },

  decreaseStock(book) {
    if (book.stock === 0) {
      return;
    }

    const nextBooks = this.state.books.map((element) => {
      if (book !== element) {
        return element;
      }

      const nextStock = book.stock - 1;

      const nextBook = Object.assign({}, book, { stock: nextStock });

      return nextBook;
    });

    this.setState({ books: nextBooks });
  },

  render() {
    return <div className="inventory">
      <h1>Inventory</h1>

      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Description</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {this.state.books.map((book, index) => {
            const formatting = index % 2 === 0 ? 'row0' : 'row1';

            return <Book
              book={book}
              decreaseStock={this.decreaseStock}
              format={formatting}
              increaseStock={this.increaseStock}
              key={index}
            />;
          })}
        </tbody>
      </table>
    </div>;
  }
});

export default App;
