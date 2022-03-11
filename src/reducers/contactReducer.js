import {contactAction} from '../actions/contactAction'
let initialState = {
    name:'',
    email:'',
    streatAddress:'',
    city:'',
    country:'',
    phoneNumber:''
}

export const contactUpdate =(state=initialState,action)=>{
    if(action.type=="Signup"){
        return{
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            streatAddress:action.payload.streatAddress,
            city:action.payload.city,
            country:action.payload.country,
            phoneNumber:action.payload.phoneNumber
        }
    }
     else return state  
}