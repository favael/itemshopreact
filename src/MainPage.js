import React from 'react';
import './style/reset.css';
import './style/MainPage.css';
import {Row} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';




class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {itemList: [], itemDetails: "", basketList:[], value:""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

 

  componentDidMount() {
    this.setState({itemList: []})
    this.setState({basketList: []})
    fetch('https://favael-books-java.herokuapp.com/book')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  

  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },

};

    fetch(`https://favael-books-java.herokuapp.com/book/shoppingCardList/` , requestOptions)
}

onItemClick = (isbn) => {
     this.setState({itemList: []})
     this.itemsDetailsFetch(isbn)
}


  allFetch = () => {
    this.setState({itemList: []})
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
     fetch('https://favael-books-java.herokuapp.com/book')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }
  
  chessFetch = () => {
    this.setState({itemList: []})
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch('https://favael-books-java.herokuapp.com/book/szachy')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }

  dramatFetch = () => {
    this.setState({itemList: []});
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch('https://favael-books-java.herokuapp.com/book/dramat')
    .then(response => response.json())
    .then(dramatResponse =>
      this.setState({itemList: dramatResponse}))
  }

  historyFetch = () => {
    this.setState({itemList: []});
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch('https://favael-books-java.herokuapp.com/book/historia')
    .then(response => response.json())
    .then(hitoryResponse =>
      this.setState({itemList: hitoryResponse}))
  }

  cookFetch = () => {
    this.setState({itemList: []});
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch('https://favael-books-java.herokuapp.com/book/gotowanie')
    .then(response => response.json())
    .then(cookResponse =>
      this.setState({itemList: cookResponse}))
  }

  romansFetch = () => {
    this.setState({itemList: []});
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch('https://favael-books-java.herokuapp.com/book/romans')
    .then(response => response.json())
    .then(romansResponse =>
      this.setState({itemList: romansResponse}))
  }

  scfiFetch = () => { 
    this.setState({itemList: []});
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch('https://favael-books-java.herokuapp.com/book/scfi')
    .then(response => response.json())
    .then(scfiResponse =>
      this.setState({itemList: scfiResponse}))
  }

  itemsDetailsFetch = (isbn) => {
    this.setState({itemList: []});
    this.setState({basketList: []})
    this.setState({itemDetails: ""})
    fetch(`https://favael-books-java.herokuapp.com/book/${isbn}`)
    .then(response => response.json())
    .then(detailsResponse =>
      this.setState({itemDetails: detailsResponse}))
  }

  shoppingCardListFetch = () => {
    this.setState({itemList: []})
    this.setState({itemDetails: ""})
    fetch(`https://favael-books-java.herokuapp.com/book/shoppingCardList`)
    .then(response => response.json())
    .then(shoppingresponse =>
      this.setState({basketList: shoppingresponse}))  
     
  }


  onAddToBasketClick = (isbn) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  };
      fetch(`https://favael-books-java.herokuapp.com/book/shoppingCardList/${isbn}` , requestOptions)
  }


  
  onItemClick = (isbn) => {
       this.setState({itemList: []})
       this.itemsDetailsFetch(isbn)
  }

  
  handleSubmit(event) {
    alert('Podano nast??puj??ce imi??: ' + this.state.value);
    event.preventDefault();
  }
  
  
  
  handleChange(event) {
    this.setState({value: event.target.value});


    
    this.setState({basketList: []})
    this.setState({itemDetails: ""})

    const string = event.target.value
    const stringSearched = string.replaceAll("\\.", "");
    console.log(stringSearched)
    if(stringSearched !=="") {
    // fetch(`localhost:8080/book/findAll/${stringSearched}`)
    fetch(`https://favael-books-java.herokuapp.com/book/findAll/A`)
    .then(response => response.json())
    .then(detailsResponse =>
      this.setState({itemList: detailsResponse}))
    }
}




  renderItemList = () => {
    return this.state.itemList.map((book) => {
      const {url, title, isbn} = book;
      const itemClick = this.onItemClick.bind(this, isbn)
      const addToBasket = this.onAddToBasketClick.bind(this, isbn)
      return <figure>
        <img src={url} alt={title} onClick = {itemClick} key={isbn}></img>
        <figcaption>{title}</figcaption>
        <div id="addToBasket" onClick = {addToBasket}>Do koszyka</div>
            </figure>
    })
  }

  renderItemDetails = () => {
    const {url, title, description, author, quantity, prize,isbn} = this.state.itemDetails;
    const addToBasket = this.onAddToBasketClick.bind(this, isbn)
    return (
        <div className = "details-content">
            <div className ="description-details">
            
                <h2>Tytu??: {title}</h2>
                <p>Autor: {author}</p>
                <p>Ilo????: {quantity} szt.</p>
                <p>Cena: {prize} z??</p>              
            </div>
            
            <div id ="detailsImage" >
                <img src = {"/" + url} alt={title}></img>
                <div id="addToBasketDetails" onClick = {addToBasket}>Do koszyka</div>
                
            </div>

            <div id= "description">{description}</div>
                
            </div>
    )
}

renderBasketCard = () => {
  return this.state.basketList.map((book) => {
    const {title, quantity, prize} = book;
    
    return (   
                <li id="backetList">
                    <div id="title">{title}</div>
                    <div id="prize">{prize}</div>
                    <div id="delete"> <img src={'./delete.jpeg'} width="30px" alt="B????d ??adowania grafiki"></img></div>  
                    
                     
                    <div className="reset-float-left"></div>   
                </li>
                
                   
        
  )
    })
  }



  render() {

    return (
      <div id="page">
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
      
      <div id="topbarL"> <img src={'./logo.jpeg'} width="200px" alt="B????d ??adowania grafiki" /></div>
      <div id="topbarR"><h1>???Pok??j bez ksi????ek jest jak cia??o bez duszy.???</h1></div>
      <div className="reset-float-left"></div>

      <div id ="search"><form onSubmit={this.handleSubmit}><input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Tu wpisz tytu??, autora, nazw?? serii.." ></input></form></div>
      
      

      <div id="menu">
        <div className="option" onClick={this.allFetch} >Wszystkie</div>
        <div className="option" onClick={this.chessFetch} >Szachy</div>
        <div className="option" onClick={this.dramatFetch} >Dramat</div>
        <div className="option" onClick={this.historyFetch} >Historia</div>
        <div className="option" onClick={this.cookFetch} >Gotowanie</div>
        <div className="option" onClick={this.romansFetch} >Romans</div>
        <div className="option" onClick={this.scfiFetch} >Sci-Fi</div>
        <div id="shopping-cart"><img src={'./shopping cart.jpeg'} width="50px" alt="B????d ??adowania grafiki" onClick={this.shoppingCardListFetch}></img></div>
        <div className="reset-float-left"></div>
      </div>  
      <div id="content">
      
        <Row>{this.state.itemList && this.renderItemList()}</Row>        
        <Row>{this.state.itemDetails && this.renderItemDetails()}</Row>
        <Row><ol>{this.state.basketList && this.renderBasketCard()}</ol></Row>
        

        </div>
      <div id="footer">???Kiedy masz jakie?? w??tpliwo??ci, id?? do biblioteki???. &copy; Wszelkie prawa zastrze??one.</div>
      </div>
      
    )
  }
}

export default withRouter(MainPage);
