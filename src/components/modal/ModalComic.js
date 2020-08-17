import React from 'react'
import errorCarga from '../../img/errorCarga.jpg'

const ModalComic=({comic})=>{
    return(
        <div className="comic-box">
            {
                    comic.image.includes('image_not') ? 
                    <img className="comic-imagen_item" src={errorCarga} alt=""/> :
                    <img className="comic-imagen_item" src={comic.image} alt="spider"/> 
                }
            <div className="comicData">
                <p className="title-comic">{comic.title}</p>
                <div className="description-comic">
                    {comic.description?
                    <p className="truncar">{ comic.description.substring(0, 150) + "..."}</p>:
                    <p className="truncar">description not aviable</p>
                    }
                    
                </div>
                
            </div>
        </div>
    )
}



export default ModalComic