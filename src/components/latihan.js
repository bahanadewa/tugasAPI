import React from 'react'
import { hitungKata } from '../1. actions'
import { connect } from 'react-redux'

class Latihan extends React.Component{
    handleCountWords = () => {
        var kata = this.refs.textarea.value
        this.props.hitungKata(kata)
    }
    render(){
        return(
            <div className='container' style={{marginTop:'50px'}}>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" ref='textarea' onChange={this.handleCountWords}></textarea>
                        <h3> {this.props.kata} Words</h3>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        kata : state.jumlah.count
    }
}

export default connect(mapStateToProps,{hitungKata})(Latihan)

