const INITIAL_STATE = {username : 'seto', email:'email'}

export default (state = INITIAL_STATE, action) => {
        if (action.type == 'UBAH_USER'){
            return { ...INITIAL_STATE, username :action.payload}
        }else {
            return state; 
        }
}