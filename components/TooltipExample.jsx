import React from "react"
import Tooltip from "./Tooltip/index"
import BannerExample from "./BannerExample"
import Button from "./Button/Button"
import useRandomize from "../hooks/useRandomize"
import {tooltipType, tooltipStyle} from "../data.js"

export default function TooltipExample(){
    const [type, randomizeType] = useRandomize({
       arr: tooltipType
        })
        
        const [style, randomizeStyle] = useRandomize({
            arr: tooltipStyle
        })

        
        function handleClick(){
            randomizeStyle()
            randomizeType()
        }
        
    return (
        <Tooltip>
            <Button className="tooltipBtn" onClick ={handleClick}>
                <Tooltip.Element type={type} style={style}>
                    <Tooltip.ContentContainer >
                        <Tooltip.TextContainer>
                            <Tooltip.Title>Archive notes</Tooltip.Title>
                            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
                        </Tooltip.TextContainer>
                    </Tooltip.ContentContainer>
                </Tooltip.Element>
            </Button>
            <Tooltip.Trigger><BannerExample /></Tooltip.Trigger>
        </Tooltip>
    )
}