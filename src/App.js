import React, { Component } from 'react';
import Searcher from './components/search/Searcher';
import SuperHeroList from './components/superHero/SuperHeroList';
import './App.css';

class App extends Component {
  state={
    heroes:[
      {id:'1',name: 'Iron-Man', image:'https://sm.ign.com/ign_latam/screenshot/default/1_3fnq.jpg'},
      {id:'2',name: 'Spider-Man', image:'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/p/spiderman_saga_6.jpg'},
      {id:'3',name: 'Fantastic Four', image:'https://www.milcomics.com/fotos/13102019212646650763.jpg'},
      {id:'4',name: 'Avengers', image:'https://i.pinimg.com/originals/c5/08/ae/c508aefed57392ab7482143e7bb21696.jpg'},
      {id:'5',name: 'Hulk', image:'https://i.annihil.us/u/prod/marvel/i/mg/8/04/5ced997c7ccd9/clean.jpg'},
    ]
  }

  search=(text)=>{
    console.log(text)
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
