import React from 'react';
import './style/reset.css';
import './MainPageTest.css';

class MainPageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chessBooks: [], dramatBooks: [], cooksBooks: [], scfiBooks: [], geographyBooks: [], romansBooks: [], historyBooks: [], chosenItem: [] } 
            
    }


componentDidMount() {
    Promise.all([fetch('https://favael-webshop.herokuapp.com/book/szachy'), fetch('https://favael-webshop.herokuapp.com/book/dramat'), fetch('https://favael-webshop.herokuapp.com/book/gotowanie'), fetch('https://favael-webshop.herokuapp.com/book/scfi'), fetch('https://favael-webshop.herokuapp.com/book/geografia'), fetch('https://favael-webshop.herokuapp.com/book/romans'), fetch('https://favael-webshop.herokuapp.com/book/historia')])
    // Promise.all([fetch('http://localhost:8080/book/szachy'), fetch('http://localhost:8080/book/dramat'), fetch('http://localhost:8080/book/gotowanie'), fetch('http://localhost:8080/book/scfi'), fetch('http://localhost:8080/book/geografia'), fetch('http://localhost:8080/book/romans'), fetch('http://localhost:8080/book/historia')])

      .then(([res1, res2, res3, res4, res5, res6, res7]) => { 
         return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json()]) 
      })
      .then(([res1, res2, res3, res4, res5, res6, res7 ]) => {
        this.setState({chessBooks: res1, dramatBooks: res2, cooksBooks: res3, scfiBooks: res4, geographyBooks: res5, romansBooks: res6, historyBooks: res7})
      });
}




  renderChessList = () => {
    return  this.state.chessBooks.map((book) => {
          return <button class = "buttonBook" >
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
      })
  }
  renderDramatList = () => {
    return  this.state.dramatBooks.map((book) => {
          return <button class = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
      })
  }
  renderCookList = () => {
    return  this.state.cooksBooks.map((book) => {
          return <button class = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
      })
  }

  renderScfiBooksList = () => {
    return  this.state.scfiBooks.map((book) => {
          return <button class = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
      })
  }

  renderGeographyBooksList = () => {
    return  this.state.geographyBooks.map((book) => {
          return <button class = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
      })
  }

  renderRomansBooksList = () => {
    return  this.state.romansBooks.map((book) => {
          return <button class = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
      })
  }

  renderHistoryBooksList = () => {
    return  this.state.historyBooks.map((book) => {
          return <button class = "buttonBook">
          <img src={book.url} alt={book.title} width = "110" height = "150"></img>
          <p>{book.title}</p>
          <p>{book.prize}</p>
          </button>
          
      })
  }
 

    render() {
        console.log('click',this.state.click)
        return(
            <div id = "page"> 
            
                <div class = "navbar">
                        <div class="dropdown">Moje konto</div>
                        <div class="dropdown">Zaloguj</div>
                        <div class="dropdown">Mój koszyk</div>
                   
                    <div class = "header-text">
                    "KUPUJMY KSIĄŻKI!"
                   
                    </div>
                    
                </div>

                <div class="navbar">
                    {/* <a href="#home">Home</a>
                    <a href="#news">News</a> */}

                    <div class="dropdown">Szachy</div>

                    <div class="dropdown">Dramat</div>

                    <div class="dropdown">Historia</div>

                    <div class="dropdown">Gotowanie</div>
                            
                    <div class="dropdown">Romans</div>

                    <div class="dropdown">Sci-Fi</div>

                    <div class="dropdown">Dramat </div>

                </div>
                            <div class = "result"> 
                            {this.renderChessList()}   
                            {this.renderDramatList()}  
                            {this.renderHistoryBooksList()} 
                            {this.renderCookList()} 
                            {this.renderRomansBooksList()} 
                            {this.renderScfiBooksList()} 
                            {this.renderGeographyBooksList()} 
                            </div>
                            </div>
        )}
}

export default MainPageTest;
