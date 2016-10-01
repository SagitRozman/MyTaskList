// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK'

// ------------------------------------
// Actions
// ------------------------------------
export function setActiveTask (task) {
  return {
    type    : SET_ACTIVE_TASK,
    task : task
  }
}


export const actions = {
  setActiveTask
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  SET_ACTIVE_TASK: (state, action) => {
    return Object.assign({}, action.task);
  }

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function tasksReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  //console.log("%%%%",state,action);
  return handler ? handler(state, action) : state
}
