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

    makeFav=()=>{
        
        this.setState({
            fav: true
        })
        console.log(this.state.fav)
        let favoritesRaw= localStorage.getItem('favorites')
        let favorites= JSON.parse(favoritesRaw)
        let arrayFav= favorites? [... favorites, this.props.hero] : [this.props.hero]

        localStorage.setItem('favorites', JSON.stringify(arrayFav));


    }

    quitFav=()=>{
        
        this.setState({
            fav: false
        })
        console.log(this.state.fav)

        let favoritesRaw= localStorage.getItem('favorites')
        let favorites= JSON.parse(favoritesRaw)
        let arrayFav= favorites.filter(hero =>{
            return hero.name !== this.props.hero.name
        })

        localStorage.setItem('favorites', JSON.stringify(arrayFav));

    }
    isFavorite = ()=> {
        /* let favoritesRaw= localStorage.getItem('favorites')
        let favorites= JSON.parse(favoritesRaw)
        
        let aux= favorites? favorites.find(element => element.id === this.props.hero.id) : 0 */

        return false
        
    }

    handleclick2= ()=>{
        axios.get('https://gateway.marvel.com/v1/public/characters/'+this.props.hero.id+'/comics?ts=1&orderBy=title&limit=5&apikey=3ad7e86fe85e634a0b52f4809e05d2e8&hash=f7c4ff643c9818fd249b11811d6f2279').then(
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
        return(
            <div className="tarjeta"  >
                <div className="radio"onClick={this.handleclick2}></div>
                <div className="radio-2"onClick={this.handleclick2}></div>
                {
                    this.props.hero.image.includes('image_not') ? 
                    <img className="imagen-heroe" src={errorCarga} alt=""/> :
                    <img className="imagen-heroe" src={this.props.hero.image} alt="spider"/> 
                }
                {this.isFavorite()?
                <i onClick={this.quitFav} className="material-icons estrellita">star</i> : 
                <i onClick={this.makeFav} className="material-icons estrellita">star_border</i>
                }

            
                <p className="name-heroe" >{this.props.hero.name}</p>
                {/* <img src={errorCarga} alt=""/> */}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      addComics: (heroID) => dispatch(addComics(heroID))
    }
}

export default connect(null, mapDispatchToProps)(HeroCard)

