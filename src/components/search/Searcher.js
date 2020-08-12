import React, { Component } from 'react';
import logoMarvel from '../../img/logoMarvel.png'
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
        this.props.search(this.state.searchText)
        this.setState({
            [e.target.id]: ' '
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