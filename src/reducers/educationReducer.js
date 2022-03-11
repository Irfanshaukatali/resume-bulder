import {educationFill} from '../actions/educationAction'
let initialState={
    collegeName:'',
    cityTown:'',
    country:'',
    degree:'',
    graduateMonth:'',
    graduateYear:''
}
export const educationUpdate=(state=initialState,action)=>{
    if(action.type=='Education'){
        return{
            ...state,
            collegeName:action.payload.collegeName,
            cityTown:action.payload.cityTown,
            country:action.payload.country,
            degree:action.payload.degree,
            graduateMonth:action.payload.graduateMonth,
            graduateYear:action.payload.graduateYear
        }
    }
    else{
        return state
    }
}