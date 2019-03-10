import React, { Component } from 'react';
import Footer from './components/footer'
import Navbar from './components/header'
import Form from './components/form'
import Homepage from './components/homepage'
import Product from './components/product'
import Latihan from './components/latihan'
import Latihan2 from './components/latihan2'
import Latihan3 from './components/latihan3'
import TugasAPI from './components/tugasAPI'
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  btnClick = () => {
    alert('Masuk')
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Route path='/form' component={Form} />
          <Route path='/latihan' component={Latihan} />
          <Route path='/latihan2' component={Latihan2} />
          <Route path='/latihan3' component={Latihan3} />
          <Route path='/tugas-api' component={TugasAPI} />
          <Route path='/products' component={Product} />
          <Route path='/' component={Homepage} exact />
        </div>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
