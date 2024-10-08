import { TODO_FILTERS } from "./consts"

export interface Todo {id:string, title:string, completed: boolean}
export type ListOfTodos = Todo[]

export type TodoID = Pick<Todo,'id'>
export type TodoTitle = Pick<Todo,'title'>
export type TodoCompleted = Pick<Todo,'completed'>

export type FilterVal = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]