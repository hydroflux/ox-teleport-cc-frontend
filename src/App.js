import { Component } from 'react'
import { parseHTTPResponse } from './helpers/utilities';

import CityList from './containers/CityList/CityList'
import Header from './containers/Header/Header';

class App extends Component {

  state = {
    cities: []
  }

  componentWillMount(){ this.getSampleCities() }

  getSampleCities = () => {
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
    const { cities } = this.state

    return (
      <div className="App">
        <Header />
        <CityList cities={cities} />
      </div>
    );
  }
}

export default App;
