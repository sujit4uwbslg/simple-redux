// The following code snippets are used to show redux works
//The sample Idea can be used to create react application also
/*
Author: Sujit Das
Title: index.js
Date:30-04-2023

*/
const redux=require("redux");

const combineReducers=redux.combineReducers

const BUY_HORROR_BOOK='BUY_HORROR_BOOK'
const BUY_ADVENTURE_BOOK='BUY_ADVENTURE_BOOK'

function buyHorrorBook(){
    return {
        type:BUY_HORROR_BOOK
    }
}

function buyAdventureBook(){
    return {
        type:BUY_ADVENTURE_BOOK
    }
}

const initialHorrorState={
    numOfHorrorBook:20
}

const initialAdventureState={
    numOfAdventureBook:30
}

const reduceHorror=(state=initialHorrorState,action)=>{
    switch(action.type){
        case BUY_HORROR_BOOK: return{
            ...state,
            numOfHorrorBook:state.numOfHorrorBook-1
        }
        default: return state
    }
}

const reduceAdventure=(state=initialAdventureState,action)=>{
    switch(action.type){
        case BUY_ADVENTURE_BOOK: return{
            ...state,
            numOfAdventureBook:state.numOfAdventureBook-1
        }
        default: return state
    }
}

const rootReducer=combineReducers({
    horror: reduceHorror,
    adventure:reduceAdventure
})
const store=redux.createStore(rootReducer)
console.log('Initial state:',store.getState())

const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buyHorrorBook())
store.dispatch(buyHorrorBook())
store.dispatch(buyAdventureBook())
store.dispatch(buyAdventureBook())
store.dispatch(buyAdventureBook())
unsubscribe()

