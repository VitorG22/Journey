import React from "react"


export function SectionContainer(props) {
    return (
        <section class="flex flex-col relative items-center z-20 ">
            {props.children}
        </section>
    )

}