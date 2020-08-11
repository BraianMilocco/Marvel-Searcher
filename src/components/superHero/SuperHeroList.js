import React from 'react'
import HeroCard from './HeroCard'

const SuperHeroList= ({heroes})=>{

    const list= heroes? (heroes.map(
        hero=>{
            return(
                <div class="container" key={hero.id}>
                    <HeroCard hero={hero} />
                </div>
            )
        }
    )
    ):( <div> No hay SuperHeroes</div> )

    return(
        <div className="cuerpo">
            {list}
        </div>
    )
}

export default SuperHeroList;