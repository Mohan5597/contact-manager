import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startShowContact } from '../../actions/contact'
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';


class ShowContact extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         contact:{}
    //     }
    // }

     componentDidMount(){
        //  console.log("adsdq",this.props)
        const id=this.props.match.params.id
         this.props.dispatch(startShowContact(id))
        
    //     const id=this.props.match.params.id
    //     axios.get(`http://localhost:3001/contacts/${id}`,{
    //         headers:{'x-auth':localStorage.getItem('userAuth')}
    //     })
    //     .then(response =>{
    //         const contact=response.data
    //         console.log(contact)
    //         this.setState(() =>({contact}))
    //     })
    }
    render(){
   
        return(
            <div>
                {console.log("props",this.props.contacts)}
                {this.props.contacts.map(contact =>{
                    return(
                    <div className="card text-white bg-dark mb-2" >
                    <div className="card-header"><b><h1><PersonIcon/>{contact.name}</h1></b></div>
                    <div className="card-body">
                        <h5 className="card-title"><CallIcon/>-{contact.mobile}</h5>
                        <h5 className="card-title"><EmailIcon/>-{contact.email}</h5>
                        <h5>{/* <h3>category-{props.contact.category.type}</h3> */}</h5>
                        <h5 className="card-title">Website-{contact.website}</h5>
                    </div>
                    
            </div>
                    )

                })}
                    <div><Link to={`/users/edit/${this.props.match.params.id}`} className="btn btn-outline-danger"><EditIcon/></Link> <span><Link to='/users/contactlist' className="btn btn-outline-danger">Back</Link></span></div>
        </div>

        )
    }
    }

const mapStateToProps=(state,props) =>{
    return{
       contacts:state.contacts  //.find(contact => contact._id===props.match.params.id)
   
    }
}

export default connect(mapStateToProps)(ShowContact)