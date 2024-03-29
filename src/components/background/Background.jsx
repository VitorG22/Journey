import React from 'react'


export function Background(props) {
    return (
        <>
            {/* <img  class=" absolute top-0 left-0 w-full h-full -z-10" src={`src/assets/${path}.jpg`} alt="" srcset="" /> */}
            {/* <div style={{"backgroundImage" : `url(src/assets/${props.path}.jpg)` }} class="h-screen w-screen bg-no-repeat bg-cover bg-scroll"> */}
            <div style={{ "backgroundImage": `url(${props.backgroundURL}.jpg)` }} class="h-screen w-screen bg-no-repeat bg-cover bg-fixed overflow-y-scroll ">
                {props.children}
            </div>
        </>
    )
}