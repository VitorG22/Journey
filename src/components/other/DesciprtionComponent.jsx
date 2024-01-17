import React from "react";

export function DescripitionComponent(props){
    return(
        <div class={`
        ${props.className} text-neutral-300 text-center text-sm  w-4/5
        md:text-start md:w-auto md:text-lg md:font-thin 
        `}
        >{props.children}</div>

    )
}