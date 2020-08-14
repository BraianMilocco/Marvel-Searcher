import React from 'react'
import { Component } from 'react'
import errorCarga from '../../img/errorCarga.jpg'


class HeroCard extends Component{
    

    render(){
        console.log('esto tambien se ejecuta dos veces?')
        return(
            <div className="tarjeta" onClick={this.props.openPopup} >
                <div className="radio"></div>
                <div className="radio-2"></div>
                {
                    this.props.hero.image.includes('image_not') ? 
                    <img className="imagen-heroe" src={errorCarga} alt=""/> :
                    <img className="imagen-heroe" src={this.props.hero.image} alt="spider"/> 
                }
                {/* <img className="imagen-heroe" src={this.props.hero.image} alt="spider"/>  */}
                <i className="material-icons estrellita">star_border</i>
                <p className="name-heroe">{this.props.hero.name}</p>
                {/* <img src={errorCarga} alt=""/> */}
            </div>
        )
    }

}

export default HeroCard

