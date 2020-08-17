const initState={
    heroes: [],
    comics: [],
}

const rootReducer=(state = initState, action)=>{

    switch(action.type){
        case 'ADD_HEROES':
            return {
                ...state,
                heroes: action.heroes
            }
        case 'ADD_COMICS':
            console.log(action.comics)
            return {
                ...state,
                comics: action.comics
            }
        default: return state
    }
}

export default rootReducer