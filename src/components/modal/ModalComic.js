import React from 'react'

const ModalComic=({comic})=>{

    

    return(
        <div className="comic-box">
            <img src={comic.image} alt="" className="comic-imagen_item"/>
            <div className="comicData">
                <p className="title-comic">{comic.title}</p>
                <div className="description-comic">
                    <p className="truncar">{comic.description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ModalComic