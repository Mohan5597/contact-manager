import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: props.isEdit ? props.contact.name : '',
            email: props.isEdit ? props.contact.email : '',
            mobile:props.isEdit? props.contact.mobile:"",
            website:props.isEdit?props.contact.website:"",
            category:"",
            categories:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleCategoryChange=this.handleCategoryChange.bind(this)
    }
    componentDidMount(){
        axios.get('/categories',{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
             .then(response=>{
                 console.log("aggga",response.data)
                 const categories=response.data
                 this.setState(() =>({categories}))
             })
    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name]:e.target.value
        })
    }
     
    handleCategoryChange(e){
        const category=e.target.value
        this.setState(() => ({category}))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            website:this.state.website,
            category:this.state.category
        }
        console.log(formData)
       
         this.props.handleSubmit(formData)
        // console.log(this.props)
        
      

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">Name  </label>
                    <div className="col-sm-3">
                        <input type='name' className="form-control" placeholder='enter your name' value={this.state.name} onChange={this.handleChange} name='name'/>
                    </div>
                    <label className="col-sm-1 col-form-label">Email  </label>
                    <div className="col-sm-3">
                        <input type='email' className="form-control" placeholder='enter your email' value={this.state.email} onChange={this.handleChange} name='email'/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-1 col-form-label">Mobile  </label>
                    <div className="col-sm-3">
                        <input type='text' className="form-control" placeholder='enter your number' value={this.state.mobile} onChange={this.handleChange} name='mobile'/>
                    </div>
                    <label className="col-sm-1 col-form-label">Website </label>
                    <div className="col-sm-3">
                        <input type='text' className="form-control" placeholder='enter your website' value={this.state.website} onChange={this.handleChange} name='website'/>
                    </div>
                </div>
                
                <div className="form-group-row">
                    <label className="col-sm-0 col-form-label"> Category </label>
                    <div className="col-sm-3">
                       <select className="form-control" value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value="">select</option>
                            {this.state.categories.map(category =>{
                                return <option key={category._id} value={category._id}>{category.type}</option>
                            })}
                        </select>
                        </div>
                   
                    </div><br/>
                    <input  className="btn btn-outline-danger" type='submit' value='save' /> <span><Link to='/users/contactlist' className="btn  btn-outline-danger">Cancel</Link></span>

                </form>
            </div>
        )
    }
}
export default ContactForm