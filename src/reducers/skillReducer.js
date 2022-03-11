import { skillFill } from "../actions/skillAction";

let initialState={
    skillOne:'',
    skill2:'',
    skill3:'',
    skill4:'',
    skill5:'',
}
export const skillUpdate=(state=initialState,action)=>{
    if(action.type=='Skills'){
        return{
            ...state,
            skillOne:action.payload.skillOne,
            skill2:action.payload.skill2,
            skill3:action.payload.skill3,
            skill4:action.payload.skill4,
            skill5:action.payload.skill5
        }
    }
    else{
        return state
    }
}