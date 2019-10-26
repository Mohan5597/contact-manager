import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import Slider from '../slide/sliders'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



function TopNav(props)
{
  
    return (
      <div>
      
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary mb-4">
          
        <Link className="navbar-brand" to="#"><b>CONTACT-MANAGER</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              {
                !_.isEmpty(localStorage.getItem('userAuth'))?(
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <li className="nav-item active">
                        <Link className="nav-link" to="#"><HomeIcon/> <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/contactlist"><PeopleIcon/>Contacts <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/profile"><AccountCircleIcon/>Profile<span className="sr-only">(current)</span></Link>
                      </li> 
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/newcontact"><PersonAddIcon/>New<span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/logout">Logout <span className="sr-only">(current)</span></Link>
                      </li>
                  </div>
                ):(
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/users/register">Register <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/users/login">Login <span className="sr-only">(current)</span></Link>
                    </li>
                   

                    
                  </div>
                )
              }
          </ul>
         
        </div>
     
      </nav>
      {  !_.isEmpty(localStorage.getItem('userAuth'))?(<div></div>):(<div><Slider/></div>)}
      
      </div>
    )
}

const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(TopNav)
