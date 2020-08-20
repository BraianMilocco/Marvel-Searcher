

export const addHeroes=(heroes)=>{
    return{
        type: 'ADD_HEROES',
        heroes: heroes
    }
}


export const addComics= (heroObject)=>{
    return {
        type:'ADD_COMICS',
        comics: heroObject
    }
}

export const seBusco=()=>{
    return {
        type:'SE_BUSCO',
        seBusco: true
    }
}

/* export const favHero=(heroID)=>{
    return{
        type:'FavHero',
        heroID: heroID
    }
} */