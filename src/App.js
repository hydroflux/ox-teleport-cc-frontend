import { Component } from 'react'
import { parseHTTPResponse } from './helpers/utilities';

import CityList from './containers/CityList/CityList'
import Header from './containers/Header/Header';
import { Route } from 'react-router-dom';
import CityContainer from './containers/CityContainer/CityContainer';

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
        <Route path="/" render={ routerProps => {
          return <Header {...routerProps} />
        }} />
        <Route exact path="/" render={ routerProps => {
          return <CityList cities={cities} {...routerProps} />
        }} />
        <Route exact path="/search" render={ routerProps => {
          return <CityContainer {...routerProps} />
        }} />
      </div>
    );
  }
}

export default App;
