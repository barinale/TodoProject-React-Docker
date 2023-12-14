import { createContext } from "react";

export const reducer = (state,action)=>{

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
            case "COMPLETE_REMOVE_PROGRESS_TODO":
                //this for complete Todo and for remove from Progess
                //so it can back to todo 'in case you add todo then relise that you don't have tim For It'
                let NewItem1;

                let NewArray1 = state.Progres.filter((item)=>{
                                if(item.id!==action.pyload.id){
                                                                return item;
                                                            }
                                else {
                                                           NewItem1 = item;
                                }            
                              
                                
                            })
                            if(action.pyload.type=="Complete")
                            return {...state,Done:[...state.Done,NewItem1],Progres:[...NewArray1]}
                            else{return {...state,todo:[...state.todo,NewItem1],Progres:[...NewArray1]}}
            
                    case "BACK_TO_PROGESS":
                    let NewItem2;

                    let NewArray2 = state.Done.filter((item)=>{
                                if(item.id!==action.pyload.id){
                                                                return item;
                                                            }
                                else {
                                    NewItem2 = item;
                                }            
                              
                                
                            })
                            return {...state,Progres:[...state.Progres,NewItem2],Done:[...NewArray2]}
                            case "RECOVER_DELETE_TODO":
                                let NewItem3;
            
                                let NewArray3 = state.Delete.filter((item)=>{
                                            if(item.id!==action.pyload.id){
                                                                            return item;
                                                                        }
                                            else {
                                                NewItem3 = item;
                                            }            
                                          
                                            
                                        })
                                        if(action.pyload.type=="Recover"){
                                        return {...state,todo:[...state.todo,NewItem3],Delete:[...NewArray3]}}
                                        else{
                                            return {...state,Delete:[...NewArray3]}}
                                        
            default:
                return {...state}
        }
}


export const ContextReducer = createContext();
