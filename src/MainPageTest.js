import React from 'react';
import './style/reset.css';
import './MainPageTest.css';

class MainPageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chessBooks: [], dramatBooks: [], cooksBooks: [], scfiBooks: [], geographyBooks: [], romansBooks: [], historyBooks: [], itemList:[] } 
            
    }


componentDidMount() {
    Promise.all([fetch('https://favael-webshop.herokuapp.com/book/szachy'), fetch('https://favael-webshop.herokuapp.com/book/dramat'), fetch('https://favael-webshop.herokuapp.com/book/gotowanie'), fetch('https://favael-webshop.herokuapp.com/book/scfi'), fetch('https://favael-webshop.herokuapp.com/book/geografia'), fetch('https://favael-webshop.herokuapp.com/book/romans'), fetch('https://favael-webshop.herokuapp.com/book/historia')])
    // Promise.all([fetch('http://localhost:8080/book/szachy'), fetch('http://localhost:8080/book/dramat'), fetch('http://localhost:8080/book/gotowanie'), fetch('http://localhost:8080/book/scfi'), fetch('http://localhost:8080/book/geografia'), fetch('http://localhost:8080/book/romans'), fetch('http://localhost:8080/book/historia')])

      .then(([res1, res2, res3, res4, res5, res6, res7]) => { 
         return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json()]) 
      })
      .then(([res1, res2, res3, res4, res5, res6, res7 ]) => {
        this.setState({chessBooks: res1, dramatBooks: res2, cooksBooks: res3, scfiBooks: res4, geographyBooks: res5, romansBooks: res6, historyBooks: res7
        
        })

      });
}




chessFetch =() => {
fetch('https://favael-webshop.herokuapp.com/book/szachy')
.then(response => response.json())
.then(response =>this.setState({itemList: response})) 
}

dramatFetch =() => {
    fetch('https://favael-webshop.herokuapp.com/book/dramat')
    .then(response => response.json())
    .then(response =>this.setState({itemList: response})) 
}

cookFetch =() => {
fetch('https://favael-webshop.herokuapp.com/book/gotowanie')
.then(response => response.json())
.then(response =>this.setState({itemList: response})) 
}

romansFetch =() => {
    fetch('https://favael-webshop.herokuapp.com/book/romans')
    .then(response => response.json())
    .then(response =>this.setState({itemList: response})) 
}


historyFetch =() => {
    fetch('https://favael-webshop.herokuapp.com/book/historia')
    .then(response => response.json())
    .then(response =>this.setState({itemList: response})) 
}





renderChoosenList = () => {
    return  this.state.itemList.map((book) => {
        return <div>
        <img src={book.url} alt={book.title} width = "110" height = "150"></img>
        <p>{book.title}</p>
        <p>{book.prize}</p>
        </div>
      })
  }



  
 

    render() {
        console.log('click',this.state.click)
        return(
            <div id = "page"> 
            
                <div class = "navbar">
                        <button class="dropdown">Moje konto</button>
                        <button class="dropdown">Zaloguj</button>
                        <button class="dropdown">Mój koszyk</button>
                <div class = "header-text">
                    "KUPUJMY KSIĄŻKI!"
                   
                    </div>
                    
                </div>

                <div class="navbar">
                    {/* <a href="#home">Home</a>
                    <a href="#news">News</a> */}

                    <button class="dropdown" onClick = {this.chessFetch} >Szachy</button>

                    <button class="dropdown" onClick = {this.dramatFetch} >Dramat</button>

                    <button class="dropdown" onClick = {this.historyFetch}>Historia</button>

                    <button class="dropdown" onClick = {this.cookFetch}>Gotowanie</button>
                            
                    <button class="dropdown" onClick = {this.romansFetch}>Romans</button>

                    <button class="dropdown">Sci-Fi</button>

                    

                </div>
                            <div class = "result"> 
                            {this.renderChoosenList()}
                            </div>
                            </div>
        )}
}

export default MainPageTest;
