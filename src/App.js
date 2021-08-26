import { Component } from 'react'
import { Route } from 'react-router-dom';

import { getSampleCities } from './helpers/utilities';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

class App extends Component {

  state = {
    cities: []
  }

  componentDidMount(){ getSampleCities().then( this.updateCities ) }
  updateCities = cities => this.setState({ cities })

  render(){
    const { cities } = this.state

    return (
      <div className="App">
        <Route path="/" render={ routerProps => {
          return <Header {...routerProps} updateCities={this.updateCities}/>
        }} />
        <Main cities={cities} />
      </div>
    );
  }
}

export default App;
