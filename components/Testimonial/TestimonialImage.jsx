import React from "react"
import {TestimonialContext} from "./Testimonial"
import logoUrl from "../../images/logoExample.png"
import pictureUrl from "../../images/pictureExample.jpg"

export default function TestimonialImage({children}){
    const {variant} = React.useContext(TestimonialContext)

    const image = variant === "picture" ? pictureUrl : logoUrl
    
    return ( <img className={`testimonialImage ${variant === "picture" && "image-picture"}`} src={image} alt="testimonial image" />)
}