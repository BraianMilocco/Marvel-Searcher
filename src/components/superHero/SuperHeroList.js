import React from 'react'
import HeroCard from './HeroCard'
import { Component } from 'react'
import ModalSH from '../modal/ModalSH'

class SuperHeroList extends Component{
     state={
        showPopup: false,

    }

    closePopup= ()=> {
        this.setState({
          showPopup: !this.state.showPopup,
        });
      }

    list= this.props.heroes? (this.props.heroes.map(
        hero=>{
            return(
                <div className="container" key={hero.id}>
                    <HeroCard hero={hero} openPopup={this.closePopup} />
                </div>
            )
        }
    )
    ):( <div> No hay SuperHeroes</div> )

    render(){
        return(
            <div className="cuerpo">
                {this.list}
                {this.state.showPopup ? 
                    <ModalSH closePopup={this.closePopup}/>
                    : null
                }
            </div>
        )
    }
}

export default SuperHeroList;