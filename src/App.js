import React, { Component } from 'react';
import Searcher from './components/search/Searcher';
import SuperHeroList from './components/superHero/SuperHeroList';
import './App.css';

class App extends Component {
  state={
    heroes:[],
    seBusco: false
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
        <SuperHeroList  sebusco={this.state.seBusco}/>
      </div>
    );
    }
  }

export default App;
