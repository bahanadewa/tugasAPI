import {combineReducers} from 'redux';
import UserState from './userGlobal';
import ProductState from './productGlobal'
import CountWord from './countWordGlobal'
import namaInput2 from './namaGlobal'


export default combineReducers({ 
    user : UserState,
    product : ProductState,
    jumlah : CountWord,
    namaInput : namaInput2
})