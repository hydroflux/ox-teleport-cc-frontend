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

  componentDidMount(){ this.getSampleCities() }

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

  updateCities = cities => {
    this.setState({ cities })
  }

  render(){
    const { cities } = this.state

    return (
      <div className="App">
        <Route path="/" render={ routerProps => {
          return <Header {...routerProps} updateCities={this.updateCities}/>
        }} />
        <Route exact path="/" render={ routerProps => {
          return <CityList cities={cities} {...routerProps} />
        }} />
        <Route exact path="/search" render={ routerProps => {
          return <CityList cities={cities} {...routerProps} />
        }} />
        <Route exact path="/show" render={ routerProps => {
          return <CityContainer {...routerProps} />
        }} />
      </div>
    );
  }
}

export default App;
