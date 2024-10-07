import * as React from "react";
import { Filters } from "./Filter";
import { FilterVal } from "../types";

interface Props{
    activeCount:number
    completedCount: number
    filterSelected: FilterVal
    onClearCompleted: ()=>void
    handleFilterChange: (filter: FilterVal)=>void
}

export const Footer: React.FC<Props>=({
    activeCount=0,
    completedCount=0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}: Props) =>{
    return (
        <footer className="footer"> 
            <span className="todo-count">
                <strong>{activeCount}</strong> pendientes
            </span>
        <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        />
        {
            completedCount>0 && (
                <button
                className="clear-completed"
                onClick={onClearCompleted}>
                    Borrar completadas
                </button>
            )
        }
        </footer>
    )
}