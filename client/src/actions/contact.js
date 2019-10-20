import axios from 'axios'

export const listContact=(contact) =>{
    return {
        type:'LIST_CONTACTS',
        payload:contact
    }
}

export const startListContact=() =>{
    return(dispatch) =>{
        axios.get("http://localhost:3001/contacts",{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
             .then(response =>{
                //  console.log(response.data)
                //  const contacts=response.data
                //  this.setState(() =>({contacts}))
                dispatch(listContact(response.data))
                
             })
    }
}

export const removeContact=(id) =>{
    return {
        type:"REMOVE_CONTACT",
        payload:id
    }
}

export const startRemoveContact=(id) =>{
    return(dispatch) =>{
        axios.delete(`http://localhost:3001/contacts/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
              .then(response =>{
                  dispatch(removeContact(id))
              })
    }
}