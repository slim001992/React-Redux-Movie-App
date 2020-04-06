import {ADD_TASK, DELETE_TASK, EDIT_TASK} from "../constants/actions-types"
export function addTask (payload){return{type:ADD_TASK,payload:{...payload}}}
export function deleteTask (id){ return{type:DELETE_TASK, id}}
export function editTask (id, newMovie){return{type:EDIT_TASK, payloadIndex : id, payload : newMovie}}