import React, { Component } from 'react'
import ModalComic from './ModalComic'
import {connect} from 'react-redux'

class ModalSH  extends Component{

    handleClick= ()=>{
        this.props.closePopup();
    }


    render(){
        console.log(this.props.comics.comics)
        return(
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-title">
                        <i className="material-icons modal-close" onClick={this.handleClick}>highlight_off</i>
                        <h3>{this.props.comics.heroe}</h3>
                    </div>
                    <div className="modal-content">
                        {
                            this.props.comics.comics ? 
                                (this.props.comics.comics.map(
                                    comic=>{
                                        return(
                                            <div className="comic-container" key={comic.id}>
                                                <ModalComic comic={comic}/>
                                            </div>
                                        )
                                    }
                                )
                                ):(<div>Wating comics</div> )
                        }
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      comics: state.comics
    }
  }

export default connect(mapStateToProps)(ModalSH)