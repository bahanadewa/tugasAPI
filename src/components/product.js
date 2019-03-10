import React from 'react'
import Axios from 'axios'

class Product extends React.Component{
    state = {user:'Orang Asing' , listProduct : []}

    componentDidMount(){
        this.getProduct()
    }

    getProduct = () => {
        Axios.get('http://localhost:2000/product')
        .then((res) => 
            
            this.setState({listProduct : res.data})
            
        )
        .catch((err) => console.log(err))
    }

    renderProduct = () => {
        var jsx = this.state.listProduct.map((val) => {
            return(
                <div>
                    <h3>{val.nama}</h3>
                    <h4>{val.harga}</h4>
                </div>
            )
        })
        return jsx
    }
    // componentWillMount(){
    //     // Sebelum render
    //     console.log('Ini Will Mount '+ this.state.user);
    // }

    // componentWillUpdate(){
    //     // setelah ada setState / Perubahan dan sebelum render
    //     console.log('Ini Will Update '+ this.state.user);
    // }
    // componentDidUpdate(){
    //     // setelah ada setState / Perubahan dan setelah render
    //     console.log('Ini Did Update '+ this.state.user);        
    // }
    
    fn =() => {
        console.log('render')
    }

    fnSetState = () => {
        this.setState({user:'joni'})
    }

    render(){
        return(
            <div>
                <h1>Products</h1>
                {this.renderProduct()}
                <input type='button' value='setState' onClick={this.fnSetState}/>
                {this.fn()}
            </div>
        )
    }
}

export default Product