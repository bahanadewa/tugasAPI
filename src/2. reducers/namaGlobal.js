const INITIAL_STATE = {user_name : ""}

export default (state=INITIAL_STATE, action)=>{
    if (action.type == "AMBIL_VALUE"){
        return {...INITIAL_STATE,user_name  :action.payload} // action payload di ambil dari parameter action 
    }else {
        return state
    }
    
}