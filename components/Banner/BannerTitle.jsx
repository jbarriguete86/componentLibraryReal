import React from "react"
import {BannerContext} from "./Banner"
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle   } from "react-icons/fa"

export default function BannerTitle(){
    
    const {variant} = React.useContext(BannerContext)
    
    function getText(){
        if(variant=== "success"){
            return "Congratulations!"
                
        } else if (variant === "warning"){
            return "Attention"
                
        } else if (variant === "error"){
            return  "There is a problem with your application"
    
        } else {
            return "Update available"
        }
    }
    
    function getIcon(){
        if(variant=== "success"){
            return <FaCheckCircle className="typeIcon successIcon "/>
                
        } else if (variant === "warning"){
            return <FaExclamationTriangle  className="typeIcon warningIcon "/>
                
        } else if (variant === "error"){
            return  <FaTimesCircle className="typeIcon errorIcon "/>
            
        } else {
            return <FaInfoCircle  className="typeIcon neutralIcon"/>
        }
    }
    
    
    return <p className="bannerTitle">
                   <span>{getIcon()}</span>
                   {getText()}
                </p>
}
