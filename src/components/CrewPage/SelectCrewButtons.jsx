import React from "react"

export function SelecCrewButtons(props){
    return(
        <li><input type="radio" defaultChecked= {props.defaultChecked} onClickCapture={() => props.setCrewSelectedPerson(props.num)} name='crewInput' class = "h-4 w-4 after:bg-slate-700 after:rounded-full after:h-4 after:w-4 after:absolute checked:after:bg-neutral-300 after:transition after:ease-in-out after:duration-700"></input></li>
    )
}