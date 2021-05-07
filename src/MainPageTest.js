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
if (this.chessBooks==null){
fetch('https://favael-webshop.herokuapp.com/book/szachy')
.then(response => response.json())
.then(response =>this.setState({itemList: response})) 
}
}

dramatFetch =() => {
    if (this.dramatBooks==null){
    fetch('https://favael-webshop.herokuapp.com/book/dramat')
    .then(response => response.json())
    .then(response =>this.setState({itemList: response})) 
}
}
cookFetch =() => {
    if (this.cooksBooks==null){
fetch('https://favael-webshop.herokuapp.com/book/gotowanie')
.then(response => response.json())
.then(response =>this.setState({itemList: response})) 
}
}
romansFetch =() => {
    if (this.romansBooks==null){
    fetch('https://favael-webshop.herokuapp.com/book/romans')
    .then(response => response.json())
    .then(response =>this.setState({itemList: response})) 
}
}

historyFetch =() => {
    if (this.historyBooks==null){
    fetch('https://favael-webshop.herokuapp.com/book/historia')
    .then(response => response.json())
    .then(response =>this.setState({itemList: response})) 
}
}




renderChoosenList = () => {
    return  this.state.itemList.map((book) => {
        return <div class = "element">
        <img src={book.url} alt={book.title} width = "110" height = "150"></img>
        <p>{book.title}</p>
        <p>{book.prize}</p>
        </div>
      })
  }



  
 

    render() {
        
        return(
            <div id = "page"> 
            
                <div class = "navbar">
                        <button class="navUpper">Moje konto</button>
                        <button class="navUpper">Zaloguj</button>
                        <button class="navUpper">Mój koszyk</button>   
                </div>
                <div class = "header-text">
                    <p>"KUPUJMY KSIĄŻKI!"</p>
                    </div>

                <div class="navbar">
                    {/* <a href="#home">Home</a>
                    <a href="#news">News</a> */}

                    <button class="navDown" onClick = {this.chessFetch} >Szachy</button>

                    <button class="navDown" onClick = {this.dramatFetch} >Dramat</button>

                    <button class="navDown" onClick = {this.historyFetch}>Historia</button>

                    <button class="navDown" onClick = {this.cookFetch}>Gotowanie</button>
                            
                    <button class="navDown" onClick = {this.romansFetch}>Romans</button>

                    <button class="navDown">Sci-Fi</button>

                    

                </div>
                            <div class = "result"> 
                            {this.renderChoosenList()}
                            {this.renderChoosenList()}
                            {this.renderChoosenList()}
                            {this.renderChoosenList()}
                            </div>
                            </div>
        )}
}

export default MainPageTest;
