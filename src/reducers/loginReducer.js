let initialState={
    uid:'',
    email:'',
    password:'',
    userName:'Login/Register'
}
export const loginUpdate=(state=initialState,action)=>{
    if(action.type=='Login'){
        return{
            ...state,
            uid:action.payload.uid,
            email:action.payload.email,
            password:action.payload.password,
            userName:action.payload.userName
        }
    }
    else {
        return state
        
    }
}