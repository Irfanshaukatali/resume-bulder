import {combineReducers} from 'redux'
import {contactUpdate} from './contactReducer'
import {workExpUpdate} from './workExpReducer'
import { workExpDescUpdate } from './workExpDescReducer'
import {educationUpdate} from './educationReducer'
import {skillUpdate} from './skillReducer'
import {summaryUpdate} from './summaryReducer'
import {updateResumeUpdate} from './updateResumeReducer.js'
import {loginUpdate} from './loginReducer'
export const rootReducer = combineReducers({
    contactUpdate,
    workExpUpdate,
    workExpDescUpdate,
    educationUpdate,
    skillUpdate,
    summaryUpdate,
    updateResumeUpdate,
    loginUpdate
})