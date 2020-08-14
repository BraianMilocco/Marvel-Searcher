import React, { Component } from 'react';
import logoMarvel from '../../img/logoMarvel.png'
import axios from 'axios'

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
        console.log('y esto')
        e.preventDefault();

        axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith='+this.state.searchText+'&apikey=3ad7e86fe85e634a0b52f4809e05d2e8&hash=f7c4ff643c9818fd249b11811d6f2279').then(
            res=>{this.props.search(res.data.data.results)  
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

export default Searcher;