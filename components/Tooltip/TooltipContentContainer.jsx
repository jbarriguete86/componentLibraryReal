import React from "react"
import { MdOutlineInbox } from "react-icons/md"
import {TooltipContext} from "./TooltipElement"

export default function TooltipContentContainer({children}){
    
    const {type, style}= React.useContext(TooltipContext)
    
    
    return ( 
        <div className={`tooltip-content ${style} ${type}`} >
            <MdOutlineInbox className="tooltip-icon"/> 
            {children}
            <div className="tooltip-close">X</div>
        </div>
    
        )
}