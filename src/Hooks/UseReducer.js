import { createContext } from "react";
import { Storage } from "./Storage";

export const reducer = (state,action)=>{
    

    switch(action.type){
        //this case is for response for adding all item from localstorage 

        case "InitialFirst":
            state.task[action.pyload.type] = [...action.pyload.list];

            
            return state;
        case "ADD":
            Storage.storeData('todo',[...state.task.todo,action.pyload]);
            return {...state,task:{...state.task,todo:[...state.task.todo,action.pyload]}}
            // return {...state,todo:[...state.task.todo,action.pyload]}
        case "DELETE_START_TODO":
            //function for remove Delete todo from list todo and add it to 
            //Delete Array
            //this function also resoposablt for add start item to Progress Array 
            //so depends on action.pyload.type we put that item on Delete Arraay
            //or In Progress Array
            let NewItem;

            let NewArray = state.task.todo.filter((item)=>{
                            if(item.id!==action.pyload.id){
                                    return true;
                                        }
                            else {
                                NewItem = item;
                                return false;
                            }            
                          
                            
                        })
                        if(action.pyload.type==='delete'){
                         Storage.storeData('Delete',[...state.task.Delete,NewItem]);
                         Storage.storeData('todo',[...NewArray]);

                            
                            // return {...state,Delete:[...state.task.Delete,NewItem],todo:[...NewArray]}
                            return {...state,task:{...state.task,Delete:[...state.task.Delete,NewItem],todo:[...NewArray]}}

                        }else{
                            Storage.storeData('Progres',[...state.task.Progres,NewItem]);
                            Storage.storeData('todo',[...NewArray]);
                            return {...state,task:{...state.task,Progres:[...state.task.Progres,NewItem],todo:[...NewArray]}}

                        }
        case "COMPLETE_REMOVE_PROGRESS_TODO":
                //this for complete Todo and for remove from Progess
                //so it can back to todo 'in case you add todo then relise that you don't have tim For It'
                        let NewItem1;

        let NewArray1 = state.task.Progres.filter((item)=>{
        if(item.id!==action.pyload.id){
            return true;
        }
        else {
            NewItem1 = item;
            return false;
        }                                                                                        
        })
        if(action.pyload.type==="Complete"){
            Storage.storeData('Completed',[...state.task.Completed,NewItem1]);
            Storage.storeData('Progres',[...NewArray1]);
        return {...state,task:{...state.task,Completed:[...state.task.Completed,NewItem1],Progres:[...NewArray1]}}

        }
        else{
            Storage.storeData('todo',[...state.task.todo,NewItem1]);
            Storage.storeData('Progres',[...NewArray1]);
            return {...state,task:{...state.task,todo:[...state.task.todo,NewItem1],Progres:[...NewArray1]}}}
            
        case "BACK_TO_PROGESS":
                    let NewItem2;

                    let NewArray2 = state.task.Completed.filter((item)=>{
                                if(item.id!==action.pyload.id){
                                                                return true;
                                                            }
                                else {
                                    NewItem2 = item;
                                    return false;
                                }            
                              
                                
                            })
                            Storage.storeData('Progres',[...state.task.Progres,NewItem2]);
                            Storage.storeData('Completed',[...NewArray2]);
            return {...state,task:{...state.task,Progres:[...state.task.Progres,NewItem2],Completed:[...NewArray2]}}
        case "RECOVER_DELETE_TODO":
            let NewItem3;

            let NewArray3 = state.task.Delete.filter((item)=>{
                        if(item.id!==action.pyload.id){
                                                        return true;
                                                    }
                        else {
                            NewItem3 = item;
                            return false;
                        }            
                        
                        
                    })
                    if(action.pyload.type==="Recover"){
                        Storage.storeData('todo',[...state.task.todo,NewItem3]);
                            Storage.storeData('Delete',[...NewArray3]);
                        return {...state,task:{...state.task,todo:[...state.task.todo,NewItem3]},Delete:[...NewArray3]}
                        
                    }
                    else{
                            Storage.storeData('Delete',[...NewArray3]);
                        return {...state,task:{...state.task,Delete:[...NewArray3]}}}

                                    
            default:
                return {...state}
        }
}


export const ContextReducer = createContext();
