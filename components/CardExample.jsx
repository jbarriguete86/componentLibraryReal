import React from "react"
import { AiOutlineCloudUpload } from "react-icons/ai";
import Card from "./Card/index"

export default function CardExample(){
    return (
        <Card>
            <Card.Icon>
                <AiOutlineCloudUpload />
            </Card.Icon>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
        </Card>
    )
}