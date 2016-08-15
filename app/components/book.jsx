import React from 'react';

const Book = React.createClass({
  handleClick(event) {
    if (event.target.value === '-') {
      this.props.decreaseStock(this.props.book);
    }
    else if (event.target.value === '+') {
      this.props.increaseStock(this.props.book);
    }
  },

  render() {
    return <tr className={this.props.format}>
      <td>
        <img src={this.props.book.cover} />
      </td>

      <td>
        <div className="title">{this.props.book.title}</div>
        <div>{this.props.book.author}</div>
        <div>Published in {this.props.book.year}</div>
        <div>{this.props.book.isbn}</div>
      </td>

      <td>
        <input
          onClick={this.handleClick}
          type="button"
          value="-"
        />
        <label className="show">{this.props.book.stock}</label>
        <input
          className="hide"
          maxLength="4"
          readOnly={true}
          size="4"
          type="text"
          value="7"
        />
        <input
          onClick={this.handleClick}
          type="button"
          value="+"
        />
      </td>
    </tr>;
  }
});

export default Book;
