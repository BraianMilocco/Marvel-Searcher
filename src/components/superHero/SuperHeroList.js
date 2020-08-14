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
                    <p>{hero.id}</p>
{/*                     <HeroCard hero={hero} openPopup={this.closePopup} />
 */}                </div>
            )
        }
    )):( <div> No hay SuperHeroes</div> )

    render(){
       console.log(this.props.heroes)
        return(
            <div className="cuerpo">
                {this.props.heroes? (this.props.heroes.map(
        hero=>{
            return(
                <div className="container" key={hero.id}>                    
                     <HeroCard hero={hero} openPopup={this.closePopup} />
                 </div>
            )
        }
    )):( <div> No hay SuperHeroes</div> )}
                {this.state.showPopup ? 
                    <ModalSH closePopup={this.closePopup}/>
                    : null
                }
            </div>
           
        )
    }
}

export default SuperHeroList;