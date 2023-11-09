export const reducer = (state,action)=>{

    switch(action.type){
        case "Add":
            return {todo:[...state.todo,action.pyload]}
        break;
        case "remove":
            console.log("Rmoving")
            break;    
            default:
                console.log("nothing was habppint form lesitno above")

    }
}

