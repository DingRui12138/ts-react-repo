export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REMOVE_TODO = 'REMOVE_TODO'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

/*
 * action 创建函数
 */

export function addTodo(data: String) {
  return { type: ADD_TODO, data }
}

export function toggleTodo(data: Number) {
  return { type: TOGGLE_TODO, data }
}

export function setVisibilityFilter(data: String) {
  return { type: SET_VISIBILITY_FILTER, data }
}
