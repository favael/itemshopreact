import React from 'react';
import './BooksList.css';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {booksList: []};
    }

componentDidMount() {
    fetch('https://favael-webshop.herokuapp.com/book')
    .then(response => response.json())
    .then(jsonResponse=> {
        this.setState({booksList: jsonResponse});
    })
}
 
renderList = () => {
  return  this.state.booksList.map((book) => {
        return <div>
            {book.booksCategory}
            {book.title}"
            {book.description}
            {book.author}
            {book.prize} 
        </div>
            
    })
}

 

    render() {
        return(
            <div id = "all"> 
         
    {this.renderList()}
                 </div>

        )
    }
}
export default BooksList;
