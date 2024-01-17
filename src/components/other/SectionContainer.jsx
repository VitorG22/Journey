import React from "react"


export function SectionContainer(props) {
    
    console.log(props.children)
    return (
        <section class="flex flex-col relative items-center z-20 md:h-4/5 ">
            {props.children}
        </section>
    )

}