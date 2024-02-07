import React from 'react'
import useEffectOnUpdate from "./useEffectOnUpdate"
import {randomizeArr} from "../utilities.js"

export default function useRandomize({
    arr = [""],
    randomize = () => { }
}) {
    
    const [element, setElement] = React.useState(arr[0])
    

    function randomElement() {
        setElement(()=>{ 
            const newArr= randomizeArr(arr)
            return newArr[0]
            })
    }
    
    useEffectOnUpdate(randomize, [element])

    return [element, randomElement]
}