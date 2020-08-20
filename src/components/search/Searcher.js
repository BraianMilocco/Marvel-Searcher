import React, { Component } from 'react';
import logoMarvel from '../../img/logoMarvel.png'
import axios from 'axios'
import { connect } from 'react-redux'
import { addHeroes, seBusco } from '../../reducers/actions/rootActions'

class Searcher extends Component { 
    state={
        searchText:'',
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.seBusco();
        this.props.search();
        axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith='+this.state.searchText+'&apikey=3ad7e86fe85e634a0b52f4809e05d2e8&hash=f7c4ff643c9818fd249b11811d6f2279').then(
            res=>{ 
                
                const result= res.data.data.results
                var heroes=[]

                result.forEach(heroe=>{
                    heroes.push({ id: heroe.id, name: heroe.name, image:(heroe.thumbnail.path +'.'+ heroe.thumbnail.extension)})
                })  
                this.props.addHeores(heroes) 
            })
    }

    render() {
        return(
            <div className="barra">
                <div className="barra-imagen">
                    <img src={logoMarvel} className="logo" alt=""/>
                </div>
                
                <form className="barra-contenedor" onSubmit={this.handleSubmit}>
                    <i className="material-icons icono-Busqueda">search</i>
                    <input type="search" className="busqueda" id="searchText" placeholder="buscar" onChange={this.handleChange}/>
                    <i className="material-icons icono-Busqueda">star_border</i>
                </form>
                
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addHeores: (heroes) => dispatch(addHeroes(heroes)),
      seBusco: ()=> dispatch(seBusco())
    }
}

export default  connect(null, mapDispatchToProps)(Searcher);