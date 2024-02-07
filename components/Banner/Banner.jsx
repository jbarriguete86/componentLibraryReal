import React from "react"
import classnames from "classnames"

const BannerContext = React.createContext()
export {BannerContext}

export default function Banner({ children, className, variant, ...rest}){
    
    let variantClass = variant && `${variant}`
    const allClasses = classnames(variantClass, className)
    
    
    return (
        <BannerContext.Provider value={{variant}}>
        <div className={`banner ${allClasses}`} {...rest}>{children}</div>
        </BannerContext.Provider>)
}