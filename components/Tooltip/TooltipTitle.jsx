import React from "react"
import {TooltipContext} from "./TooltipElement"

export default function TooltipTitle({children}){
    
     const {type, style}= React.useContext(TooltipContext)
     
     
    return <p className={`tooltip-title ${type} ${style}`}>{children}</p>
}