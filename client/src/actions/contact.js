import axios from '../config/axios'

export const listContact=(contact) =>{
    return {
        type:'LIST_CONTACTS',
        payload:contact
    }
}

export const startListContact=() =>{
    return(dispatch) =>{
        axios.get("/contacts",{
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

export const showContact=(id) =>{
    return {
        type:'SHOW_CONTACT',
        payload:id
    }
}

export const startShowContact=(id) =>{
    return(dispatch)=>{
        
            axios.get(`/contacts/${id}`,{
                headers:{'x-auth':localStorage.getItem('userAuth')}
            })
            .then(response =>{
              dispatch(showContact(response.data))
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
        axios.delete(`/contacts/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
              .then(response =>{
                  dispatch(removeContact(response.data))
              })
    }
}