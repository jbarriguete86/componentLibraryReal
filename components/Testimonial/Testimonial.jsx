import React from "react"
import classnames from "classnames"
import testimonialBckimage from "../../images/dotPattern.png"


const TestimonialContext = React.createContext()
export {TestimonialContext}

export default function Testimonial({children, variant}){

    return (
        <TestimonialContext.Provider value={{variant}}>
        <div className={`testimonial-container ${variant === "picture" && "container-picture"}`}>
                {variant=== "logo" && <img className="testimonialLogo-bckg" src={testimonialBckimage} alt="background pattern"/>}
                {children}

        </div>
        </TestimonialContext.Provider>
    )
}