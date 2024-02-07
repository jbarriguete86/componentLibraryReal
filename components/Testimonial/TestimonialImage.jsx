import React from "react"
import {TestimonialContext} from "./Testimonial"

export default function TestimonialImage({children}){
    const {variant} = React.useContext(TestimonialContext)
    
    return ( <img className={`testimonialImage ${variant === "picture" && "image-picture"}`} src={children} alt="testimonial image" />)
}