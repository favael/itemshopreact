import React from 'react';
import './style/reset.css';
import './style/AddItem.css';


class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {itemDetails: []
    }
    }

    componentDidMount() {
        fetch(`https://favael-webshop.herokuapp.com/book/szachy`)
        .then(response => response.json()
        .then(jsonResponse => {
            this.setState({itemDetails: jsonResponse})
        })
        )

        const {url, title, description, author, quantity, prize, booksCategory} = this.state.itemDetails;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: {author}, booksCategory: {booksCategory}, description:{description}, prize:{}, quantity:{quantity}, title: {title}, url: {url}})
    };

        fetch(`https://favael-webshop.herokuapp.com/soldBook/shoppingCardList`, requestOptions)
        .then(response => response.json()
        .then(jsonResponse => {
            this.setState({
                itemDetails: jsonResponse
            })
        })
        )
    }


    

    render() {

        return (
            <button onClick> Add book
            </button>
            
        )
    }
}

export default AddItem;