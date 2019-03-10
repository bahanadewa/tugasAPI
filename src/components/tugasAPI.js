import React from  'react'
import axios from 'axios'


class TugasAPI extends React.Component{
    state = {listFilm : []}

    cari =()=>{
        var nama = this.refs.nama.value
        axios.get("http://www.omdbapi.com/?s="+nama+"&apikey=580118ed")
        .then ((res)=>{this.setState({listFilm :res.data.Search})
    })
        .catch ((err)=> console.log(err))
    }

    mapfilm =()=>{
        var mapfilm = this.state.listFilm.map((val)=>{
            return(
                <div className="card mt-5 col-md-4 "  style={{width: '18rem',textAlign:"center"}}>
                    <img style={{width:"300px"}} src={val.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{val.Title}</h5>
                    <p className="card-text">{val.Type}</p>
                    <p className="card-text">{val.Year}</p>
                    </div>
                </div>
            )
        })
        return mapfilm
    }
    render (){
        return(
            <div className="container mt-5">
                <div>
                     <input type="text" className="mr-3" ref="nama"/>
                    <input type='button' value="cari" onClick={this.cari}/>
                </div>
                <div className="row justify-content-center"> 
                    {this.mapfilm()}
                </div>
              
               
            </div>
        )
    }
}

export default TugasAPI
