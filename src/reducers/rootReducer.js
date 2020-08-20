
const pepe= localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites'))
: 
(()=>{localStorage.setItem('favorites', JSON.stringify([])); return[]})


const seBusco= (localStorage.getItem('favorites')) ? (
    (JSON.parse(localStorage.getItem('favorites')).length > 0) ? true : false
) : false

const initState={
    seBusco: seBusco,
    heroes: pepe,
    comics: [],
}
console.log(initState)

const rootReducer=(state = initState, action)=>{

    switch(action.type){
        case 'ADD_HEROES':
            return {
                ...state,
                heroes: action.heroes
            }
        case 'ADD_COMICS':
            return {
                ...state,
                comics: action.comics
            }
        case 'SE_BUSCO' :
            return{
                ...state,
                seBusco: action.seBusco
            }
        default: return state
    }
}

export default rootReducer