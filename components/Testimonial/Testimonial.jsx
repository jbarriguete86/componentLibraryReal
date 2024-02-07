import React from "react"
import classnames from "classnames"


const TestimonialContext = React.createContext()
export {TestimonialContext}

export default function Testimonial({children, variant}){

    return (
        <TestimonialContext.Provider value={{variant}}>
        <div className={`testimonial-container ${variant === "picture" && "container-picture"}`}>
                {variant=== "logo" && <img className="testimonialLogo-bckg" src="../../images/dotPattern.png" alt="background pattern"/>}
                {children}

        </div>
        </TestimonialContext.Provider>
    )
}