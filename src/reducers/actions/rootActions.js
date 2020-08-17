

export const addHeroes=(heroes)=>{
    return{
        type: 'ADD_HEROES',
        heroes: heroes
    }
}

export const addComics=(comics)=>{

    return{
        type:'ADD_COMICS',
        comics: comics
    }
    
}