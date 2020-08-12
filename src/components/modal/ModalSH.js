import React, { Component } from 'react'

class ModalSH  extends Component{

    handleClick= ()=>{
        this.props.closePopup();
    }

    render(){
        return(
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-title">
                        <i className="material-icons modal-close" onClick={this.handleClick}>highlight_off</i>
                        <h3>Title probando con muchas letras a ver que pasa deberian ser demasiadas palabras</h3>
                    </div>
                    <div className="modal-content">It Works
                    </div>
                </div>
            </div>
        )
    }

}

export default ModalSH