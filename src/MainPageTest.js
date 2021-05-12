import React from 'react';
import './style/reset.css';
import './style/MainPageTest.css';
import { Row } from 'react-bootstrap';


class MainPageTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chessBooks: [], dramatBooks: [], cooksBooks: [], scfiBooks: [], geographyBooks: [], romansBooks: [], historyBooks: [], itemList: [] }
  }


  componentDidMount() {
    Promise.all([fetch('https://favael-webshop.herokuapp.com/book/szachy'), fetch('https://favael-webshop.herokuapp.com/book/dramat'), fetch('https://favael-webshop.herokuapp.com/book/gotowanie'), fetch('https://favael-webshop.herokuapp.com/book/scfi'), fetch('https://favael-webshop.herokuapp.com/book/geografia'), fetch('https://favael-webshop.herokuapp.com/book/romans'), fetch('https://favael-webshop.herokuapp.com/book/historia')])
      // Promise.all([fetch('http://localhost:8080/book/szachy'), fetch('http://localhost:8080/book/dramat'), fetch('http://localhost:8080/book/gotowanie'), fetch('http://localhost:8080/book/scfi'), fetch('http://localhost:8080/book/geografia'), fetch('http://localhost:8080/book/romans'), fetch('http://localhost:8080/book/historia')])

      .then(([res1, res2, res3, res4, res5, res6, res7]) => {
        return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json()])
      })
      .then(([res1, res2, res3, res4, res5, res6, res7]) => {
        this.setState({
          chessBooks: res1, dramatBooks: res2, cooksBooks: res3, scfiBooks: res4, geographyBooks: res5, romansBooks: res6, historyBooks: res7

        })

      });
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



  renderItemList = () => {
    return this.state.itemList.map((book) => {
      return <figure className="col-3 col-sm-2 " key={book.isbn}>

        <img src={book.url} alt={book.title}></img>
        <figcaption>{book.title}</figcaption>

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
            <Row>
            {this.renderItemList()}
            </Row>
        </div>
        </section>
        <footer>

        </footer>
      </div>

    )
  }
}

export default MainPageTest;
