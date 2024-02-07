import React from "react"
import {TestimonialContext} from "./Testimonial"

export default function TestimonialMain({children}){
    const {variant} = React.useContext(TestimonialContext)
    
    
    return (
        <div className={`testimonial-inner ${variant === "picture" && "testimonial-picture"}`}>     {children}
        </div>
        )
}