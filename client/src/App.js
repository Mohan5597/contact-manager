import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import _ from 'lodash'

import './App.css';
import NewContact from './components/contacts/new';
import ContactList from './components/contacts/list'
import Register from './components/user/registration'
import Login from './components/user/login'
import Account from './components/user/account'
import Logout from './components/user/logout'
import TopNav from './components/topNav/topNav'
import ShowContact from './components/contacts/show';
import EditContact from './components/contacts/edit';
import profileModal from './components/user/profileModal';

//import './App.css'





function App() {
  return (
    <BrowserRouter>
    
   
     <div>
      
      <ul>
       
      <TopNav/>
      </ul>

      <Switch>
        <Route path='/users/register' component={Register} exact={true}/>
        <Route path='/users/login' component={Login} exact={true}/>
        <Route path='/users/profile' component={Account} exact={true}/>
        <Route path='/users/logout' component={Logout} exact={true}/>
        <Route path='/users/contactlist' component={ContactList} exact={true}/>
        <Route path='/users/newcontact' component={NewContact} exact={true}/>
        <Route path='/users/show/:id' component={ShowContact} exact={true}/>
        <Route path='/users/edit/:id' component={EditContact}/>
        <Route path='/users/edit-profile' component={profileModal}/>
      </Switch>
      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
