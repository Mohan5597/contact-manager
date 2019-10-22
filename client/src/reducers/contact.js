const contactsReducer=(state=[],action) =>{
    switch(action.type){
        case "LIST_CONTACTS":
            return [...action.payload]
        case "SHOW_CONTACT":
            return [action.payload]
        case "REMOVE_CONTACT":
            return {}
        default:
            return [...state]
    }
}
export default contactsReducer