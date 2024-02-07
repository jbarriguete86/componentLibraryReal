import React from "react"
import classnames from "classnames"


export default function Badge({ children, className, form, variant, ...rest} ){
    
    let variantClass = variant && `${variant}`
    let formClass = form && `${form}`
    const allClasses = classnames(formClass, variantClass, className)
    
    
    
    
    
    
    return (
    <div className={`badge ${allClasses}`} {...rest}>
        <p>{children}</p>
    </div>
    )
}