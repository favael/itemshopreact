import React from 'react';
import './style/reset.css';
import './style/MainPage.css';
import {Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';




class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { itemList: [], itemDetails: null, basketList:[]}
}

 

  componentDidMount() {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }

  allFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }
  
  chessFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book/szachy')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }

  dramatFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book/dramat')
    .then(response => response.json())
    .then(dramatResponse =>
      this.setState({itemList: dramatResponse}))
  }

  historyFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book/historia')
    .then(response => response.json())
    .then(hitoryResponse =>
      this.setState({itemList: hitoryResponse}))
  }

  cookFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book/gotowanie')
    .then(response => response.json())
    .then(cookResponse =>
      this.setState({itemList: cookResponse}))
  }

  romansFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book/romans')
    .then(response => response.json())
    .then(romansResponse =>
      this.setState({itemList: romansResponse}))
  }

  scfiFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-books-java.herokuapp.com/book/scfi')
    .then(response => response.json())
    .then(scfiResponse =>
      this.setState({itemList: scfiResponse}))
  }

  itemsDetailsFetch = (isbn) => {
    
    fetch(`https://favael-books-java.herokuapp.com/book/${isbn}`)
        .then(response => response.json()
        .then(jsonResponse => {
            this.setState({itemDetails: jsonResponse})
        })
        )
  }
  
  onAddToBasketClick = (isbn) => {
    
   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      
  };

      fetch(`https://favael-books-java.herokuapp.com/shoppingCardList/` + isbn , requestOptions)
      .then(response => response.json()
      .then(jsonResponse => {
          this.setState({
              itemDetails: jsonResponse
          })
      })
      )
  }


  onItemClick = (isbn) => {
    this.setState({itemList:[]})
    this.itemsDetailsFetch(isbn)
  }

  renderItemList = () => {
    return this.state.itemList.map((book) => {
      const {url, title, isbn, prize} = book;
      const itemClick = this.onItemClick.bind(this, isbn)
      const addToBasket = this.onAddToBasketClick.bind(this, isbn)
      return <figure>
        <img src={url} alt={title} onClick = {itemClick} key={isbn}></img>
        <figcaption>{title}</figcaption>
        <div id="addToBasket" onClick = {addToBasket} key={isbn}>Do koszyka</div>
            </figure>
    })
  }

  renderItemDetails = () => {
    const {url, title, description, author, quantity, prize} = this.state.itemDetails;

    return (
        <div className = "details-content">
            <div className ="description-details">
            
                <h2>Tytuł: {title}</h2>
                <p>Autor: {author}</p>
                <p>Ilość: {quantity} szt.</p>
                <p>Cena: {prize} zł</p>              
            </div>
            <div id ="detailsImage">
                <img src = {"/" + url} alt={title}></img>
            </div>
              
            


            <div id= "description">{description}</div>
            </div>
    )
}



  render() {

    return (
      <div id="page">
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
      
      <div id="topbarL"> <img src={'./logo.jpeg'} width="200px"  /></div>
      <div id="topbarR"><h1>„Pokój bez książek jest jak ciało bez duszy.”</h1></div>
      <div className="reset-float-left"></div>

      <div id ="search"><input placeholder="Tu wpisz tytuł, autora, nazwę serii.."></input></div>
      


      <div id="menu">
        <div className="option" onClick={this.allFetch} >Wszystkie</div>
        <div className="option" onClick={this.chessFetch} >Szachy</div>
        <div className="option" onClick={this.dramatFetch} >Dramat</div>
        <div className="option" onClick={this.historyFetch} >Historia</div>
        <div className="option" onClick={this.cookFetch} >Gotowanie</div>
        <div className="option" onClick={this.romansFetch} >Romans</div>
        <div className="option" onClick={this.scfiFetch} >Sci-Fi</div>
        <div id="shopping-cart"><img src={'./shopping cart.jpeg'} width="50px"></img></div>
        <div className="reset-float-left"></div>
      </div>  
      <div id="content">
        <Row>{this.renderItemList()}</Row>        
        <Row>{this.state.itemDetails && this.renderItemDetails()}</Row>
        </div>
      <div id="footer">. „Kiedy masz jakieś wątpliwości, idź do biblioteki”. &copy; Wszelkie prawa zastrzeżone.</div>
      </div>
      
    )
  }
}

export default withRouter(MainPage);
