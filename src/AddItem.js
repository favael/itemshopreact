import React from 'react';
import './style/reset.css';
import './style/AddItem.css';


class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            booksCategory: "",
            description: "",
            prize: null,
            quantity: null,
            title: "",
            url: ""
    
    }
    }

    componentDidMount() {
const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author:"Kowalski Jan", booksCategory:"Dramat", description:"Long long long", prize:1.99, quantity:2, title: "Dino", url: "Dino.jpeg"})
    };

        fetch(`https://favael-webshop.herokuapp.com/book`, requestOptions)
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