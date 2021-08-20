import { Component } from 'react'
import { parseHTTPResponse } from './helpers/utilities';

import SampleCities from './components/SampleCities'

class App extends Component {

  state = {
    cities: []
  }

  componentDidMount(){
    fetch('https://api.teleport.org/api/cities', {
      headers: {
        'Content-Type': 'application/json'
      }})
      .then( parseHTTPResponse )
      .then( ({_embedded}) => {
        this.setState({
          cities: _embedded["city:search-results"]
        })})
  }

  render(){
    return (
      <div className="App">
        <SampleCities cities={this.state.cities} />
      </div>
    );
  }
}

export default App;
