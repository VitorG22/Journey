import React from "react"

export function SelectButtons(props){
    return(
        <li><input type="radio" defaultChecked= {props.defaultChecked} onClickCapture={() => props.setSelectedButton(props.num)} name='Input' class = "h-4 w-4 after:bg-slate-700 after:rounded-full after:h-4 after:w-4 after:absolute checked:after:bg-neutral-300 after:transition after:ease-in-out after:duration-700"></input></li>
    )
}