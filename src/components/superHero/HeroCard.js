import React from 'react'
import { Component } from 'react'



class HeroCard extends Component{
    

    render(){
        return(
            <div className="tarjeta" onClick={this.props.openPopup} >
                <div className="radio"></div>
                <div className="radio-2"></div>
                <img className="imagen-heroe" src={this.props.hero.image} alt="spider"/> 
                <i className="material-icons estrellita">star_border</i>
                <p className="name-heroe">{this.props.hero.name}</p>

            </div>
        )
    }

}

export default HeroCard

