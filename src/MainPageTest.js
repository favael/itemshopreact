import React from 'react';
import './style/reset.css';
import './style/MainPageTest.css';
import {Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import ItemDetails from './ItemDetails';



class MainPageTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = { itemList: [], itemDetails: null}
}

 

  componentDidMount() {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }

  allFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }
  
  chessFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book/szachy')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }

  dramatFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book/dramat')
    .then(response => response.json())
    .then(dramatResponse =>
      this.setState({itemList: dramatResponse}))
  }

  historyFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book/historia')
    .then(response => response.json())
    .then(hitoryResponse =>
      this.setState({itemList: hitoryResponse}))
  }

  cookFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book/gotowanie')
    .then(response => response.json())
    .then(cookResponse =>
      this.setState({itemList: cookResponse}))
  }

  romansFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book/romans')
    .then(response => response.json())
    .then(romansResponse =>
      this.setState({itemList: romansResponse}))
  }

  scfiFetch = () => {
    this.setState({itemDetails: null});
    fetch('https://favael-webshop.herokuapp.com/book/scfi')
    .then(response => response.json())
    .then(scfiResponse =>
      this.setState({itemList: scfiResponse}))
  }

  itemsDetailsFetch = (isbn) => {
    
    fetch(`https://favael-webshop.herokuapp.com/book/${isbn}`)
        .then(response => response.json()
        .then(jsonResponse => {
            this.setState({itemDetails: jsonResponse})
        })
        )
  }
  

  onItemClick = (isbn) => {
    this.setState({itemList:[]})
    this.itemsDetailsFetch(isbn)
        

    // this.props.history.push({pathname: `/book/${isbn}`});
  }

  renderItemList = () => {
    return this.state.itemList.map((book) => {
      const {url, title, isbn, prize} = book;
      const itemClick = this.onItemClick.bind(this, isbn)
      return <figure onClick = {itemClick} key={isbn}>
        <img src={url} alt={title}></img>
        <figcaption>{title}</figcaption>
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
        <div id="upper">
        <nav className="navbar">
          <button className="navUpper">Moje konto</button>
          <button className="navUpper">Zaloguj</button>
          <button className="navUpper">Mój koszyk</button>
        </nav>
        <header>
          <div className = "logo"></div>
        </header>
        <nav className="navbar">
          {/* <a href="#home">Home</a>
                    <a href="#news">News</a> */}
            <button className="navDown" onClick={this.allFetch} >Wszystkie</button>

            <button className="navDown" onClick={this.chessFetch} >Szachy</button>

            <button className="navDown" onClick={this.dramatFetch} >Dramat</button>

            <button className="navDown" onClick={this.historyFetch}>Historia</button>

            <button className="navDown" onClick={this.cookFetch}>Gotowanie</button>

            <button className="navDown" onClick={this.romansFetch}>Romans</button>

            <button className="navDown" onClick={this.scfiFetch}>Sci-Fi</button>

        </nav>
        </div>
        <div id="results">
        <div id='leftSideBar'></div>  
        <div className="container">
        <Row>{this.renderItemList()}</Row>        
        <Row>{this.state.itemDetails && this.renderItemDetails()}</Row>
            
        </div>
        <div id='righSideBar'></div> 
        </div>
        
        <footer>

        </footer>
      </div>

    )
  }
}

export default withRouter(MainPageTest);
