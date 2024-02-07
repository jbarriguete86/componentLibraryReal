import React from "react"
import {TestimonialContext} from "./Testimonial"

export default function TestimonialFooter({children}){
    const {variant} = React.useContext(TestimonialContext)
    
    return <div className={`testimonialFooter ${variant==="picture" && "footer-picture"}`}>{children}</div>
}