import React from 'react'
import { Modal,  ModalBody } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startEditUser } from '../../actions/user'




class ProfileModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            modal: true
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    toggle() {
        this.props.history.push('/user/profile')
    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData={
            username:this.state.username,
            
        }
        this.props.dispatch(startEditUser(formData))
        
        this.props.history.push('/users/profile')
        window.location.reload()
    }


    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered={true}>
                    {/* <ModalHeader toggle={this.toggle}>Add Destination</ModalHeader> */}
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <h3>Edit UserName</h3>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"> UserName</label>
                                <div className="col-sm-5">
                                    <input className="form-control" type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                                </div>
                            </div>
                           
                            <input className="btn btn-primary" type='submit' /><span><Link to='/users/profile' className="btn btn-dark">Cancel</Link></span>

                            {/* <input className="btn btn-primary" type="submit" value='Add' /> */}
                        </form>
                    </ModalBody>
                    
                </Modal>
            </div>
        )
    }
}

export default connect()(ProfileModal)