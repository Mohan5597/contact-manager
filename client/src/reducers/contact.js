const contactsReducer=(state=[],action) =>{
    switch(action.type){
        case "LIST_CONTACTS":
            return [...action.payload]
        default:
            return [...state]
    }
}
export default contactsReducer