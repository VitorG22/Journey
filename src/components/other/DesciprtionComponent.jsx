import React from "react";

export function DescripitionComponent(props){
    return(
        <p class={`${props.className} text-neutral-300 text-center text-sm  w-4/5`}>{props.children}</p>

    )
}