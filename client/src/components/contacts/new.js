import React from 'react' 
import ContactForm from './form'
import axios from 'axios'
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class NewContact extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (formData) => {
        axios.post('http://localhost:3001/contacts',formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
        //  console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                this.props.history.push('/users/contactlist')
            }
        })
         .catch(err =>{
             console.log(err)
         })
    }

    render() {
        return (
            <div>
                <h2><PersonAddIcon/>Add Contact</h2> 
                <ContactForm handleSubmit={this.handleSubmit} />
            </div> 
        )
    }
}

export default NewContact
