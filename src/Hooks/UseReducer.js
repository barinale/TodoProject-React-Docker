import { createContext } from "react";

export const reducer = (state,action)=>{
console.log("how many number Rednerds")
    switch(action.type){
        case "ADD":
            return {...state,todo:[...state.todo,action.pyload]}
        case "DELETE_START_TODO":
            //function for remove Delete todo from list todo and add it to 
            //Delete Array
            //this function also resoposablt for add start item to Progress Array 
            //so depends on action.pyload.type we put that item on Delete Arraay
            //or In Progress Array
            let NewItem;
            console.log(action)

            let NewArray = state.todo.filter((item)=>{
                            if(item.id!==action.pyload.id){
                                    return item;
                                        }
                            else {
                                NewItem = item;
                            }            
                          
                            
                        })
                        if(action.pyload.type=='delete'){
                            return {...state,Delete:[...state.Delete,NewItem],todo:[...NewArray]}
                        }else{
                            return {...state,Progres:[...state.Progres,NewItem],todo:[...NewArray]}
                        }
            case "START_TODO":

            console.log("tesing")
                        



            break;
            default:
                console.log("nothing was habppint form lesitno above")

    }
}


export const ContextReducer = createContext();
