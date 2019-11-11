import React from 'react'
import axios from '../../config/axios'
import ContactForm from './form'

class EditContact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contact:{},
            isLoading: true
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/contacts/${id}`,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
             .then(response =>{
                 const contact=response.data
                 this.setState(() =>({contact,isLoading: false}))
             })
    }

    handleSubmit(formData) {
        const id = this.props.match.params.id
        axios.put(`/contacts/${id}`,formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
            
            if ((response.data.message) || (response.data.name==="" )||(response.data.mobile===null)) {
                alert("name/mobile/category required")
            } else {
                  this.props.history.push(`/users/show/${id}`)

            }
        })
    }
    render(){
        return(
            <div>
                <h2>Edit Contact</h2>
                {
                     (!this.state.isLoading &&<ContactForm
                    contact={this.state.contact}
                    isEdit={true}
                    handleSubmit={this.handleSubmit}/>)
                }
            </div>
        )
    }
}
export default EditContact