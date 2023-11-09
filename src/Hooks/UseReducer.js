export const reducer = (state,action)=>{

    switch(action.type){
        case "Add":
            console.log('adding')
            break;
        case "remove":
            console.log("Rmoving")
            break;    
            default:
                console.log("nothing was habppint form lesitno above")
                
    }
}

