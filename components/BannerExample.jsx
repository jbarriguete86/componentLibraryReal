import React from "react"
import Button from "./Button/Button"
import Banner from "./Banner/index"
import useRandomize from "../hooks/useRandomize"
import {bannerVariant} from "../data.js"

export default function BannerExample(){
    const [variant, randomizeVariant] = useRandomize({
       arr: bannerVariant
        })
        
    
    return (
        <Button onClick={randomizeVariant} className="componentsBtn">
        <Banner variant={variant}>
        <Banner.Title/>
        <Banner.Text>This is just an example of a banner</Banner.Text>
        </Banner>
        </Button>
    )
}