import React from "react"

const TooltipContext = React.createContext()
export {TooltipContext}


export default function TooltipElement({children, style, type}){
    
    
   return (
       <TooltipContext.Provider value={{style, type}}>
       <div className="tooltip">
                {children}
                <div className={`tooltip-bottom-container ${type} ${style}`}></div>
            </div>
        </TooltipContext.Provider>
   )
}