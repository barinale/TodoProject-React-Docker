import { createContext } from "react";

export const reducer = (state,action)=>{

    switch(action.type){
        case "ADD":
            return {todo:[...state.todo,action.pyload]}
        break;
        case "DELETE":
            return {todo:[...state.todo.filter((item)=>item.id!==action.pyload.id)]}
            break;    
            default:
                console.log("nothing was habppint form lesitno above")

    }
}


export const ContextReducer = createContext();
