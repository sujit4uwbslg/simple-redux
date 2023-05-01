// The following code snippets are used to show redux works
//The sample Idea can be used to create react application also
/*
Author: Sujit Das
Title: index.js
Date:30-04-2023

*/
const redux=require("redux");

const BUY_BOOK='BUY_BOOK'

function buyBook(){
    return {
        type:BUY_BOOK
    }
}

const initialState={
    numOfBook:20
}

const reduce=(state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK: return{
            ...state,
            numOfBook:state.numOfBook-1
        }
        default: return state
    }
}

function myListener(state){
   console.log('Updated State',state)
}

const store=redux.createStore(reduce)
console.log('Initial state:',store.getState())
//store.subscribe(()=>console.log('Updated State',store.getState()))
store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyBook())

