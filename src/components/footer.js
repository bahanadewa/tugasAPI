// Class Components
// Props // properties => Transfer data dari parent ke child

import React,{Component} from 'react'

class Footer extends Component{
    state = {number : 1}
    handleState = () => {
        this.setState({number : this.state.number+1})
    }


    render(){   
        return(
            <div style={{position:'fixed',left:'0px',bottom:'0px',height:'100px',backgroundColor:'black',width:'100%'}}> 
                
            </div>
        )
    }
}

export default Footer


// Function Components