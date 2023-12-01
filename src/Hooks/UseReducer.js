import { createContext } from "react";

export const reducer = (state,action)=>{

    switch(action.type){
        case "ADD":
            return {...state,todo:[...state.todo,action.pyload]}
        case "DELETE":
            //function for remove Delete todo from list todo and add it to 
            //Delete Array
            let ItemDelete;
            let NewArray = state.todo.filter((item)=>{
                            if(item.id!==action.pyload.id){
                                    return item;
                                        }
                            else{
                                ItemDelete = item;
                            }            
                            
                            
                        })
                        console.log(NewArray)
                        
            return {...state,Delete:[...state.Delete,ItemDelete],todo:[...NewArray]}
            default:
                console.log("nothing was habppint form lesitno above")

    }
}


export const ContextReducer = createContext();
