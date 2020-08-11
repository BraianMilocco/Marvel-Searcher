import React from 'react'

const HeroCard= ({hero})=>{
    return(
        <div className="tarjeta">
            <div className="radio"></div>
            <div className="radio-2"></div>
            <img className="imagen-heroe" src={hero.image} alt="spider"/> 
            <i className="material-icons estrellita">star_border</i>
            <p className="name-heroe">{hero.name}</p>
        </div>
    )
}

export default HeroCard