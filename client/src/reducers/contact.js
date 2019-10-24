const contactsReducer=(state=[],action) =>{
    switch(action.type){
        case "LIST_CONTACTS":
            return [...action.payload]
        case "SHOW_CONTACT":
            return [action.payload]
        case "REMOVE_CONTACT":
            return state.filter(contact => contact._id!==action.payload)
        default:
            return [...state]
    }
}
export default contactsReducer