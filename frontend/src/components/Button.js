import React from "react"
import { useState, useEffect } from "react"
import styles from '../styles/index'

import { Button as Btn, Fab } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const Button = (props) => {
    const [label, setlabel] = useState(props.label ? props.label : "")
    const [color, setcolor] = useState(props.color ? props.color : "")
    const [action, setAction] = useState(props.action ? props.action : null)
    const [disabled, setDisabled] = useState(props.disabled ? props.disabled : true)
    const [icon, setIcon] = useState(props.icon ? props.icon : "")
    const [position, setPosition] = useState(props.position ? props.position : "")
    const [buttonTemplate, setButtonTemplate] = useState('')
    const [size, setSize] = useState(props.size ? props.size : "medium")

    useEffect(() => {
        if (props.position === "top-left") {
            setPosition("absolute top left")
            setButtonTemplate(<Fab style={style} absolute top left size={size}>
                {icon}
            </Fab>)
        }
        if (props.position === "top-right") {
            setPosition("absolute top right")
            setButtonTemplate(<Fab style={style} absolute top right size={size}>
                {icon}
            </Fab>)
        }
        if (props.position === "bottom-left") {
            setPosition("absolute bottom left")
            setButtonTemplate(<Fab style={style} absolute bottom left size={size}>
                {icon}
            </Fab>)
        }
        if (props.position === "bottom-right") {
            setPosition("absolute bottom right")
            setButtonTemplate(<Fab style={style} absolute bottom right size={size}>
                {icon}
            </Fab>)
        }


    }, [])
    const style = {
        borderRadius: "50px",
        height: "50px",
        width: "50px",
        backgroundColor: '#e0e0e0'
    }
    return (
        <div>
            {buttonTemplate}
        </div>
    )
}

export default Button