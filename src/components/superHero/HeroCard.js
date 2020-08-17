import React from 'react'
import { Component } from 'react'
import errorCarga from '../../img/errorCarga.jpg'
import {connect } from 'react-redux'
import {addComics} from '../../reducers/actions/rootActions'
import axios from 'axios'

class HeroCard extends Component{
    state={
        fav: false
    }

    handleClick=()=>{
        const favorite= !this.state.fav
        this.setState({
            fav: favorite
        })
        console.log(this.state.fav)
    }

    handleclick2=()=>{
        axios.get('http://gateway.marvel.com/v1/public/characters/'+this.props.hero.id+'/comics?ts=1&orderBy=title&limit=5&apikey=3ad7e86fe85e634a0b52f4809e05d2e8&hash=f7c4ff643c9818fd249b11811d6f2279').then(
            res =>{
                
                
                const result= res.data.data.results
                var comics=[]
                result.forEach(comic=>{
                    comics.push(
                        {id: comic.id, title: comic.title, image:(comic.thumbnail.path +'.'+ comic.thumbnail.extension), description: comic.description})
                    }) 
                const heroData={
                    heroe: this.props.hero.name,
                    comics: comics
                } 
                this.props.addComics(heroData)
                
            }
        )
        this.props.openPopup()
        /* this.props.addComics(this.props.hero.id);
        this.props.openPopup(); */
        
    }

    render(){
        console.log('esto tambien se ejecuta dos veces?')
        return(
            <div className="tarjeta"  >
                <div className="radio"onClick={this.handleclick2}></div>
                <div className="radio-2"onClick={this.handleclick2}></div>
                {
                    this.props.hero.image.includes('image_not') ? 
                    <img className="imagen-heroe" src={errorCarga} alt=""/> :
                    <img className="imagen-heroe" src={this.props.hero.image} alt="spider"/> 
                }
                {this.state.fav?
                <i onClick={this.handleClick} className="material-icons estrellita">star</i> : 
                <i onClick={this.handleClick} className="material-icons estrellita">star_border</i>
                }

            
                <p className="name-heroe" >{this.props.hero.name}</p>
                {/* <img src={errorCarga} alt=""/> */}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      addComics: (comics) => dispatch(addComics(comics))
    }
}

export default connect(null, mapDispatchToProps)(HeroCard)

