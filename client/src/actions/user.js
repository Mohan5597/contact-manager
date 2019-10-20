import axios from 'axios'

export const registerUser = (user) => {
    return {
        type: 'REGISTER_USER',
        payload: user
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const startSetUser = (user) => {
    return (dispatch) => {
        axios.get('http://localhost:3001/users/profile', {
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then(response => {
                dispatch(setUser(response.data))
            })
    }
}

export const removeUser=(id) =>{
    return{
        type:'REMOVE_USER',
        payload:id
    }
}

export const editUser=(user) =>{
    return{
        type:"EDIT_USER",
        payload:user
    }
}

export const startEditUser=(formData) =>{
    return(dispatch) =>{
        axios.put('http://localhost:3001/users/profile/edit',formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response=>{
            dispatch(editUser(response.data))
        })
    }
}