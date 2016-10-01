import moment from 'moment'

// ------------------------------------
// Constants
// ------------------------------------
export const TASK_ADD = 'TASK_ADD';
export const TASK_TOGGLE = 'TASK_TOGGLE';
export const TASK_UPDATE = 'TASK_UPDATE';



// ------------------------------------
// Actions
// ------------------------------------

export function taskAdd (value) {
  return {
    type : TASK_ADD,
    task : value
  }
}

export function taskToggle (id) {
  return {
    type : TASK_TOGGLE,
    id : id
  }
}

export function taskUpdate (value) {
  return {
    type : TASK_UPDATE,
    task : value
  }
}

export const actions = {
  taskAdd,
  taskToggle,
  taskUpdate
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {

  TASK_ADD: (state, action) => {
    return [
      ...state,
      {
        id: state.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
        description: action.task.description,
        assignee: action.task.assignee,
        dueDate: action.task.dueDate,
        completed: false
      }
    ]
  },

  TASK_TOGGLE :(state, action) => {
    return state.map(task => {
      if (task.id === action.id) {
        return Object.assign({}, task, {
          completed: !task.completed
        });
      }
      else{
        return task;
      }
    })
  },

  TASK_UPDATE:(state, action) => {
    console.log('update');
    return state.map(task => {
      if (task.id === action.task.id) {
        return Object.assign({}, task, action.task);
      }
      else{
        return task;
      }
    })
  }

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [
  {
    id: 1,
    description: "Sagit's Project",
    assignee:"Sagit",
    dueDate:moment().add(-1, 'days'),
    completed: false
  },
  {
    id: 2,
    description: "Sagit's second Project",
    assignee:"Sagit",
    dueDate:moment().add(3, 'days'),
    completed: false
  },
  {
    id: 3,
    description: "Sagit's completed Project",
    assignee:"Sagit",
    dueDate:moment().add(4, 'days'),
    completed: true
  }
];

export default function taskReducer (state = initialState, action) {

  const handler = ACTION_HANDLERS[action.type]
  //console.log("****",state,action);
  return handler ? handler(state, action) : state
}
