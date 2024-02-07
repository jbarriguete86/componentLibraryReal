import React from "react"
import {TestimonialContext} from "./Testimonial"

export default function TestimonialName({children}){
     const {variant} = React.useContext(TestimonialContext)
     
     
    return (
        <p className="testimonialName">
        {children} 
        {variant !== "picture" && (<span>/</span> )} 
        </p>
    ) 
}