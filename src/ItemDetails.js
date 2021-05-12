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
        const {url, title, description} = this.state.itemDetails;
        return (
            <div className = "details-content">
                <h1>{title}</h1>
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