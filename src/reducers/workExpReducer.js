import { workExpAction} from '../actions/workExpAction'

let initialState = {
    jobTitle:'',
    company:'',
    cityTown:'',
    country:'',
    startDate:'',
    startYear:'',
    endDate:'',
    endYear:''
}
export const workExpUpdate=(state=initialState,action)=>{
    if(action.type=='Experience'){
        return{
            ...state,
            jobTitle:action.payload.jobTitle,
            company:action.payload.company,
            cityTown:action.payload.cityTown,
            country:action.payload.country,
            startDate:action.payload.startDate,
            startYear:action.payload.startYear,
            endDate:action.payload.endDate,
            endYear:action.payload.endYear,
        }
    }
    else return state
}