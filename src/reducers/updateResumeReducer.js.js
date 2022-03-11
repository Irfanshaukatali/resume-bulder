
let initialState = {
        color: 1,
        fontStyle: 1,
        fontSize:1
}
export const updateResumeUpdate = (state = initialState, action) => {
    if (action.type =="UpdateResume") {
        return {
            ...state,
            color: action.payload.color,
            fontStyle: action.payload.fontStyle,
            fontSize: action.payload.fontSize

        }
    }
    else {
        return state
    }
}