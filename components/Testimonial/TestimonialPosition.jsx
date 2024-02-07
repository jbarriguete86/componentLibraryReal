import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialPosition({children}){

    const {variant} = React.useContext(TestimonialContext)


    return (<p className={`testimonialPosition ${variant === "picture" && "position-picture"}`}>{children}</p>
    )
}