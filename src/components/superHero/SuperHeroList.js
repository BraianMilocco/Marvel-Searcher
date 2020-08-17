import React from 'react'
import HeroCard from './HeroCard'
import { Component } from 'react'
import ModalSH from '../modal/ModalSH'
import { connect } from 'react-redux'

class SuperHeroList extends Component{
     state={
        showPopup: false,
    }

    closePopup= ()=> {
        this.setState({
          showPopup: !this.state.showPopup,
        });
      }

    list= ()=>{
        const list= this.props.heroes.length? (this.props.heroes.map(
            hero=>{
                return(
                    <div className="container" key={hero.id}>
                        <HeroCard hero={hero} openPopup={this.closePopup} />
                    </div>
                )
            }
        )):( <div className="texto-ayuda"> No hay SuperHeroes</div> )

        return list
    }

    

    render(){
       
        return(
            <div className="cuerpo">
                {this.props.sebusco?
                this.list(): <div className="texto-ayuda">Search your superhero by name ex Spider-Man or by comic(function in process)</div> }
                {this.state.showPopup ? 
                    <ModalSH closePopup={this.closePopup}/>
                    : null
                }
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
      heroes: state.heroes
    }
  }

export default connect(mapStateToProps)(SuperHeroList);
