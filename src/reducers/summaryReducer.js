import { summaryFill } from "../actions/summaryAction";
let initialState= {
    summaryDesc:''
}
export const summaryUpdate=(state=initialState,action)=>{
    if(action.type=='Summary'){
        return{
            ...state,
            summaryDesc:action.payload.summaryDesc
        }
    }
    else{
        return state
    }
}