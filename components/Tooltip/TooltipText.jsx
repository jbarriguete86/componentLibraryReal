import React from "react"
import {TooltipContext} from "./TooltipElement"

export default function TooltipText({children}){
    const {type, style}= React.useContext(TooltipContext)
    
    return <p className={`tooltip-text ${type} ${style}`}>{children}</p>
}