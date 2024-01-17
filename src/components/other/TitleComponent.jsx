import React from "react"

export function Title(props) {
    return (
        <>
                <h1 class="
                text-neutral-300 font-thin whitespace-nowrap from-top 
                md:absolute md:top-4 md:left-4 md:text-lg 
                ">
                    <span class= "text-slate-300 font-bold">{props.number}</span> {props.title}
                </h1>
        </>
    )
}