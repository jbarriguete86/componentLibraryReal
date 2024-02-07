import React from "react"
import Testimonial from "./Testimonial/index"
import Button from "./Button/Button"
import useRandomize from "../hooks/useRandomize"
import {testimonialVariant, testimonialType} from "../data.js"


// I just had to adjust the component for you to check both types of testimonial in a normal environment I would get rid of the useRandomize hook and the function renderImageIcon. Also on the Testimonial component would be a need to have a context.This was good to practice all those features

export default function TestimonialExample(){
     const [variant, randomizeVariant] = useRandomize({
       arr: testimonialVariant
        })
 
           const imgRender = <Testimonial.Image>{testimonialType[variant]}</Testimonial.Image>

    return (
        <Button onClick={randomizeVariant} className="componentsBtn">
            <Testimonial variant={variant}>
                {imgRender}
                <Testimonial.Main>
                    <Testimonial.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial.Text>
                    <Testimonial.Footer>
                        <Testimonial.Name>May Andersons</Testimonial.Name>
                        <Testimonial.Position>Workcation, CTO</Testimonial.Position>
                    </Testimonial.Footer>
                </Testimonial.Main> 
            </Testimonial>
        </Button>
        
    )
}