import React, { Component } from 'react';
import Searcher from './components/search/Searcher';
import SuperHeroList from './components/superHero/SuperHeroList';
import './App.css';

class App extends Component {
  state={
    heroes:undefined
  }

  mapearHeroes=(heroes)=>{
    var lista=[]

    heroes.map(heroe=>{
      lista.push({id: heroe.id, name: heroe.name, image:(heroe.thumbnail.path +'.'+ heroe.thumbnail.extension)})
    })

    return lista
  }

  search=(text)=>{
    const lista= this.mapearHeroes(text)
    this.setState({
      heroes: lista
    })
    console.log(this.state.heroes)
  }

  render(){
    return (
      <div className="App">
        <Searcher search={this.search}/>
        <SuperHeroList heroes={this.state.heroes}/>
      </div>
    );
    }
  }

export default App;
