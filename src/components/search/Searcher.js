import React, { Component } from 'react';
import logoMarvel from '../../img/logoMarvel.png'
class Searcher extends Component { 
    state={
        searchText:'',
    }

    render() {
        return(
            <div className="barra">
                <div className="barra-imagen">
                    <img src={logoMarvel} className="logo" alt=""/>
                </div>
                
                <div className="barra-contenedor">
                    <i className="material-icons icono-Busqueda">search</i>
                    <input type="search" className="busqueda" placeholder="buscar"/>
                    <i className="material-icons icono-Busqueda">star_border</i>
                </div>
                
            </div>
            
        )
    }
}

export default Searcher;