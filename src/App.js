import React, { Component } from 'react';
import Searcher from './components/search/Searcher';
import SuperHeroList from './components/superHero/SuperHeroList';
import './App.css';

class App extends Component {
  state={
    seBusco: true
  }

  search=()=>{
    this.setState({
      seBusco: true
    })
    
  }

  render(){
    
    return (
      <div className="App">
        <Searcher search={this.search}/>
        <SuperHeroList />
      </div>
    );
    }
  }

export default App;
