import React from 'react'
import { fnUbahUser } from '../1. actions'
import { connect } from 'react-redux'
import './../support/css/cssform.css'

// inline
// external
class Form extends React.Component{

    handleButton = () => {
        var username = this.refs.username.value
        this.props.fnUbahUser(username)
        
    }

    render(){
        var hidden = {color:'blue',fontSize:'30px'}
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-4 mt-4'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" class='merah'>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='username' onChange={this.handleButton} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" style={hidden}>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <input type="button" className="btn btn-primary" onClick={this.handleButton} value='submit' />
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default connect(null,{fnUbahUser})(Form)

