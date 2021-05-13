import React from 'react';
import './style/reset.css';
import './style/MainPageTest.css';
import { Row } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';



class MainPageTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = { itemList: []}
}

 

  componentDidMount() {
    fetch('https://favael-webshop.herokuapp.com/book/szachy')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }



  chessFetch = () => {
    fetch('https://favael-webshop.herokuapp.com/book/szachy')
    .then(response => response.json())
    .then(bookResponse =>
      this.setState({itemList: bookResponse}))
  }

  dramatFetch = () => {
    fetch('https://favael-webshop.herokuapp.com/book/dramat')
    .then(response => response.json())
    .then(dramatResponse =>
      this.setState({itemList: dramatResponse}))
  }

  historyFetch = () => {
    fetch('https://favael-webshop.herokuapp.com/book/historia')
    .then(response => response.json())
    .then(hitoryResponse =>
      this.setState({itemList: hitoryResponse}))
  }

  cookFetch = () => {
    fetch('https://favael-webshop.herokuapp.com/book/gotowanie')
    .then(response => response.json())
    .then(cookResponse =>
      this.setState({itemList: cookResponse}))
  }

  romansFetch = () => {
    fetch('https://favael-webshop.herokuapp.com/book/romans')
    .then(response => response.json())
    .then(romansResponse =>
      this.setState({itemList: romansResponse}))
  }

  scfiFetch = () => {
    fetch('https://favael-webshop.herokuapp.com/book/scfi')
    .then(response => response.json())
    .then(scfiResponse =>
      this.setState({itemList: scfiResponse}))
  }

  onItemClick = (isbn) => {
    this.props.history.push({pathname: `/book/${isbn}`});
  }

  renderItemList = () => {
    return this.state.itemList.map((book) => {
      const {url, title, isbn} = book;
      const itemClick = this.onItemClick.bind(this, isbn)
      return <figure className="col-3 col-sm-2" onClick = {itemClick} key={isbn}>
        <img src={url} alt={title}></img>
        <figcaption>{title}</figcaption>
      </figure>
    })
  }

  render() {

    return (
      <div id="page">

        <nav className="navbar">
          <button className="navUpper">Moje konto</button>
          <button className="navUpper">Zaloguj</button>
          <button className="navUpper">Mój koszyk</button>
        </nav>

        <header id = "header-background">
          <div class = "logo"></div>
        </header>
        <nav className="navbar">
          {/* <a href="#home">Home</a>
                    <a href="#news">News</a> */}

            <button className="navDown" onClick={this.chessFetch} >Szachy</button>

            <button className="navDown" onClick={this.dramatFetch} >Dramat</button>

            <button className="navDown" onClick={this.historyFetch}>Historia</button>

            <button className="navDown" onClick={this.cookFetch}>Gotowanie</button>

            <button className="navDown" onClick={this.romansFetch}>Romans</button>

            <button className="navDown" onClick={this.scfiFetch}>Sci-Fi</button>

        </nav>
        <section>
          
        <div className="container">
        <Row>{this.renderItemList()}</Row>

          
        </div>
        </section>
        <footer>

        </footer>
      </div>

    )
  }
}

export default withRouter(MainPageTest);
