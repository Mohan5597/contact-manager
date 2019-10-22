import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errMsg: '',
            successMsg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3001/users/login', formData)
            .then((response) => {
                 console.log('resolve', response.data)
                if (response.data==='invalid email/password') {
                    
                    alert('invalid email/password')
                  
                }
                else {
                    //console.log(response.data)
                    localStorage.setItem('userAuth', response.data.token)
                    this.props.history.push('/users/profile')
                }
            })
            .catch((err) => {
                console.log('reject', err)
            })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                {this.state.errMsg && <p>{this.state.errMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                       
                            <input type="text" id="inputEmail3" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" placeholder="Email"/>
                        </div>
                    </div><br/>
                    <div className="form-row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                       
                            <input type="password" id="inputPassword3" value={this.state.password} name="password" onChange={this.handleChange} className="form-control" placeholder="Password"/>
                    </div>
                    </div><br/>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login