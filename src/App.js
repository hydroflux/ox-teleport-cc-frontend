import { Component } from 'react'

class App extends Component {

  componentDidMount(){
    fetch('https://api.teleport.org/api/', {
      headers: {
        'Content-Type': 'application/json'
      }})
      .then( response => response.json() )
      .then( console.log )
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to the Teleport API</h1>
      </div>
    );
  }
}

export default App;
