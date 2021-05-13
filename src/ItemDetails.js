import React from 'react';
import './style/reset.css';
import './style/ItemDetails.css';


class ItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {itemDetails: null}
    }

    componentDidMount() {
        const isbn = this.props.match.params.isbn;
        fetch(`https://favael-webshop.herokuapp.com/book/${isbn}`)
        .then(response => response.json()
        .then(jsonResponse => {
            this.setState({itemDetails: jsonResponse})
        })
        )
    }


    renderItemDetails = () => {
        const {url, title, description, author, quantity, prize} = this.state.itemDetails;
        return (
            <div className = "details-content">
                <div className ="description-details">
                    <h1>Tytuł: {title}</h1>
                    <h2>Autor: {author}</h2>
                    <h3>Ilość: {quantity} szt.</h3>
                    <h3>Cena: {prize} zł</h3>
                    <button>Dodaj do koszyka</button>
                </div>

                <img src = {"/" + url} alt={title}></img>

    
                <div className = "description">{description}</div>
                </div>
           
        )
    }

    render() {
        return (
            <div className = "details">
                {this.state.itemDetails && this.renderItemDetails()}
            </div>
            
        )
    }
}

export default ItemDetails;