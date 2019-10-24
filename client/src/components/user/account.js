import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import { connect } from 'react-redux'
import {  startSetUser } from '../../actions/user'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';


class Account extends React.Component {

    componentDidMount() {
        if (_.isEmpty(this.props.user)) {
            // axios.get('http://localhost:3005/user/profile', {
            //     headers: {
            //         'x-auth': localStorage.getItem('userAuth')
            //     }
            // })
            //     .then(response => {
            //         this.props.dispatch(setUser(response.data))
            //     })
            //     .catch(err => {
            //         this.props.history.push('/login')
            //     })
            this.props.dispatch(startSetUser())
        }
    }
    render() {
        return (
                        <div>
                    

            <div className="card border-info mb-3">
            <div className="card-header info-transparent border-success"><b><AccountCircleIcon/>Profile</b></div>
            <div className="card-body text-dark">
            <h5 className="card-title"> <b>Name-</b>{this.props.user.username}</h5>
            <h5 className="card-title"><b>Email-</b>{this.props.user.email}</h5>
            
            </div>
            <div className="card-footer info-transparent border-success"><Link to='/users/edit-profile' className="btn btn-outline-danger" ><EditIcon/>Edit</Link></div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Account)




