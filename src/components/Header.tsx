import * as React from "react"
import { TodoTitle } from "../types"
import {CreateTodo} from './CreateTodo'
interface Props{
    onAddTodo: (title: TodoTitle)=> void
}

export const Header: React.FC<Props> = ({onAddTodo})=>{
    return (
        <header className="header" >
            <h1 ><span className="do-title">toDo</span></h1>
            <CreateTodo saveTodo={onAddTodo}/>
        </header>

    )
}