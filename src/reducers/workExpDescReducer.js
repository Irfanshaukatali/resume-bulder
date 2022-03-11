import { workExpDescFill } from "../actions/workExpDescAction";
let initialState={
    jobDescription:''
}
export const workExpDescUpdate=(state=initialState,action)=>{
    if(action.type=='ExperienceDescription'){
        return{
            ...state,
            jobDescription:action.payload.jobDescription
        }
    }
    else {
        return state
    }
}