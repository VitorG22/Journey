import React from "react"

export function SwitchButton(props){
    return (<button onClick={() => props.funct(!props.value)} class={`text-neutral-300 px-4 py-2 transition ease duration-300 rounded-md  ${props.value ? "border-slate-950 bg-neutral-300 text-slate-950 hover:bg-neutral-400":"border border-neutral-300 bg-transparent text-neutral-300 hover:bg-neutral-300/20"}`}>{props.children}</button>)
    
}