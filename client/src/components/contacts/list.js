import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startListContact, startRemoveContact} from '../../actions/contact'
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import ListIcon from '@material-ui/icons/List';


class ContactList extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         contacts:[]
    //     }
    // }
    
    componentDidMount(){
        // axios.get("http://localhost:3001/contacts",{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        //      .then(response =>{
        //         //  console.log(response.data)
        //         //  const contacts=response.data
        //         //  this.setState(() =>({contacts}))
        //         this.props.dispatch(listContact(response.data))
                
        //      })
        this.props.dispatch(startListContact())
    }

    handleRemove=(id)=>{
        this.props.dispatch(startRemoveContact(id))

    }

    render(){
        return(
            <div>
                
                <h2><ListIcon className="primary"/>Contact List</h2>
                  <table  className="table table-striped table-dark">
                      <thead>
                          <tr>
                              <th>Id</th>
                              <th><PersonIcon/></th>
                              <th><CallIcon/></th>
                              <th><EmailIcon/></th>
                              <th>Category</th>
                              <th>Website</th>
                             

                          </tr>
                      </thead>
                      <tbody>
                         
                         {this.props.contacts.map((contact,index) =>{
                             return(
                                 <tr key={contact._id}>
                                     <td>{index+1}</td>
                                     <td>{contact.name}</td>
                                     <td>{contact.mobile}</td>
                                     <td>{contact.email}</td>
                                     <td>{contact.category.type}</td>
                                     <td>{contact.website}</td>
                                     <td>{<Link to={`/users/show/${contact._id}`}className="btn btn-outline-danger">Show</Link>}</td>
                                     <td><button onClick={() =>{
                                         const confirmRemove=window.confirm('Are you sure')
                                         if(confirmRemove){
                                             this.handleRemove(contact._id)
                                         }
                                     }}className="btn btn-outline-danger"><DeleteIcon/></button></td>
                                 </tr>
                             )
                         })}

                      </tbody>
                  </table>
                 <div><Link to='/users/newcontact' className="btn btn-outline-danger"><PersonAddSharpIcon/>ADD</Link></div>
                
              
            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    return{
        contacts:state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)