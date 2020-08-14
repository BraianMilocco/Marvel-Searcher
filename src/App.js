import React, { Component } from 'react';
import Searcher from './components/search/Searcher';
import SuperHeroList from './components/superHero/SuperHeroList';
import './App.css';

class App extends Component {
  state={
    heroes:[],
    seBusco: false
  }

  search=(text)=>{
    var lista=[]

    text.forEach(heroe=>{
      lista.push({id: heroe.id, name: heroe.name, image:(heroe.thumbnail.path +'.'+ heroe.thumbnail.extension)})
    })
    
    this.setState({
      heroes: lista,
      seBusco: true
    })
    console.log('la app se ejectua')
  }

  render(){
    return (
      <div className="App">
        <Searcher search={this.search}/>
        <SuperHeroList heroes={this.state.heroes} sebusco={this.state.seBusco}/>
      </div>
    );
    }
  }

export default App;
