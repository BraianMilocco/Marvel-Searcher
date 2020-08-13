import React, { Component } from 'react'
import ModalComic from './ModalComic'


class ModalSH  extends Component{

    state={
        comics:[
            {id:'1',title:'Captain Marvel (2019) #19', description: ' THE ACCUSER GOES ROGUE! Captain Marvel has stepped into the role of accuser in the newly unified Kree/Skrull Empire. But when she’s tasked to accuse a renegade soldier responsible for heinous crimes, she finds herself torn between two worlds. Don’t miss the revelation of the year - one that will not only change Carol’s whole world, but the shape of the galaxy! ', image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/80/5f282a5fafd27/clean.jpg'},
            {id:'2',title:'Empyre (2020) #5', description: 'Love and war - in the midst of cosmic cataclysm! One fan-favorite Marvel hero reveals their secret - as another faces the ultimate showdown with a monstrous foe! Meanwhile, an outer-space jailbreak leads to a trial by combat you’ll have to see to believe - but is it all too late to save Earth from two world-ending threats at once? ', image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/20/5f282a4c54a5c/clean.jpg'},
            {id:'3',title:'Hawkeye: Freefall (2020) #5', description: 'Hawkeye’s relationship to Ronin has even his friends turning against him. He’s been lying about a lot of things. But you can’t lie to Captain America. Meanwhile, his war with the Hood is beginning to spin out of control as the people close to him are put in real danger. Having to deal with the Hood was bad enough, but now Clint finds himself in the sites of another former Hawkeye. No. Not her... Enter BULLSEYE. ', image:'https://i.annihil.us/u/prod/marvel/i/mg/a/40/5e9e0787c71fd/clean.jpg'},
        ]
    }

    handleClick= ()=>{
        this.props.closePopup();
    }

    comicList= this.state.comics? (
        this.state.comics.map(
            comic=>{
                return(
                    <div className="comic-container" key={comic.id}>
                        <ModalComic comic={comic}/>
                    </div>
                )
            }
        )
    ):(<div>Wating comics</div> )

    render(){
        return(
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-title">
                        <i className="material-icons modal-close" onClick={this.handleClick}>highlight_off</i>
                        <h3>SuperHeroe Nombre (alargado para probar si se rompe facil)</h3>
                    </div>
                    <div className="modal-content">
                        {this.comicList}
                    </div>
                </div>
            </div>
        )
    }

}

export default ModalSH