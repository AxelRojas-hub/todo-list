import React from "react";
import {TodoID, type Todo as TodoType} from '../types'
interface Props extends TodoType {
    onToggleCompleted:({id,completed}:Pick<TodoType,'id'|'completed'>)=>void
    onRemoveTodo: ({id}:TodoID)=>void
}

export const Todo: React.FC<Props> = ({id,title,completed,onRemoveTodo,onToggleCompleted}) =>{
    return (
        <div className="view">
            <input
                className="toggle"
                checked ={completed}
                type="checkbox"
                onChange={(e)=>{
                    onToggleCompleted({id,completed:e.target.checked})
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={()=>{onRemoveTodo({id})}}
            />
        </div>
    )
}