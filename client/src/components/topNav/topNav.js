import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'


function TopNav(props)
{
  
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary mb-4">
        <Link className="navbar-brand" to="/">Contacts-App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              {
                !_.isEmpty(localStorage.getItem('userAuth'))?(
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/contacts">Contacts <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/profile">Profile <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/contactlist">List<span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/users/newcontact">Add<span className="sr-only">(current)</span></Link>
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
    )
}

const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(TopNav)
