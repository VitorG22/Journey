import React from "react"

export function Title(props) {
    return (
        <>
                <h1 class="text-neutral-300 font-thin"><span class= "text-slate-300 font-bold">{props.number}</span> {props.title}</h1>
        </>
    )
}