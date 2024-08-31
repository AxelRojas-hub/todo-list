import React from "react";
import { FILTERS_BUTTONS} from "../consts";
import {type FilterVal} from "../types"

interface Props{
    onFilterChange : (filter:FilterVal)=>void
    filterSelected: FilterVal
}

export const Filters: React.FC<Props>=({filterSelected, onFilterChange})=>{
    // const handleClick= (filter:FilterVal)=>()=>onFilterChange(filter)
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key,{href,literal}])=>{
                    const isSelected = key == filterSelected
                    const className = isSelected? 'selected':''

                    return (
                        <li key={key}>
                            <a 
                            className={className} 
                            href={href}
                            onClick={(event)=>{
                                event.preventDefault()
                                onFilterChange(key as FilterVal)
                            }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
                }
        </ul>
    )
}