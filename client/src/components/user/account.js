import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import { connect } from 'react-redux'
import {  startSetUser } from '../../actions/user'


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
                <b>Name-</b>{this.props.user.username}<span><Link to='/users/edit-profile' className="btn btn-dark" >Edit</Link></span><br/>
                <b>Email-</b>{this.props.user.email}

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




