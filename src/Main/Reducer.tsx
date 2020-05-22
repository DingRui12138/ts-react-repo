import { combineReducers } from 'redux'
import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from './Action'

interface Action {
  type: String
  data: Number | String
}
const TODO = 'TODO'
const DONE = 'DONE'

export interface TODO_ITEM {
  status: String
  msg: String
}

type STATUS = typeof TODO

const initState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [{ status: TODO, msg: '12' }],
}

const todoState = (state = initState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            msg: action.data,
            status: TODO,
          },
        ],
      }
    case TOGGLE_TODO:
      return {
        state,
        todos: state.todos.map((i: TODO_ITEM, idx: Number) => {
          return {
            ...i,
            status: idx === action.data ? DONE : i.status,
          }
        }),
      }
    case SET_VISIBILITY_FILTER:
      break
    default:
      return state
  }
}

export default combineReducers({
  todoState,
})
