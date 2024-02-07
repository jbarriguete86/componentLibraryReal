import React from 'react'
import Badge from './Badges/Badge'
import Button from './Button/Button'
import useRandomize from "../hooks/useRandomize"
import {badgesForm, badgesVariant} from "../data.js"


export default function BadgeButtonExample(){
    const [form, randomizeForm] = useRandomize({
       arr: badgesForm
        })
    const [variant, randomizeVariant] = useRandomize({
       arr: badgesVariant
        })
        
    return (
        <Button className="componentsBtn" onClick={()=>{
            randomizeForm() 
            randomizeVariant()
            }}>
        <Badge form={form} variant={variant}>Random changing badge</Badge>
        </Button>
        )
}


  