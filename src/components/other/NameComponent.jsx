import React from "react";

export function NameComponent(props){
    return(
        <h1 class={`${props.className} text-neutral-300 text-center text-4xl my-2 w-4/5`}>{props.children}</h1>

    )
}