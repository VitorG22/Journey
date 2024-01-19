import React from "react";

export function NameComponent(props) {
    return (
        <div class={`
        font-serif
        ${props.className} text-neutral-300 text-center text-4xl my-2 w-4/5
            md:text-start
        `}
        >{props.children}</div>

    )
}