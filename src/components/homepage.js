import React from 'react'
import { connect } from 'react-redux'

class Homepage extends React.Component{
    state = {nama : 'Fikri'}

    functionSetState = () => {
        this.setState({nama : 'Seto'})
    }

    

    render(){
    var {username,email} = this.props.nama 
        return(
            <div>
                <h1 id='h1'>{this.state.nama}</h1>
                <h1>Selamat Datang Di Website {this.props.nama.username}</h1>
                <h2>{this.props.nama.email}</h2>
                <input type='button' value='coba' onClick={this.functionSetState} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {nama : state.user}
}
// nama : {username : 'Seto' , email : 'email'}

export default connect(mapStateToProps)(Homepage);