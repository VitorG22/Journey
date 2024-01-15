import React from "react";

export function Modal(props){
    return(
        <div  class="bg-slate-950/80 h-screen w-screen  fixed top-0 left-0 z-50 flex justify-center items-center ">
            <div class = "bg-slate-900 py-4 rounded-lg w-3/4  flex flex-col items-center gap-2 text-left relative fade-in">
                <button onClick={(event) => closeModal(event)} class = "text-neutral-300 absolute top-2 right-4 ">X</button>
                {props.children}
            </div>
        </div>
    )
}

function closeModal(event){
    console.log(event.target.offsetParent.offsetParent)
    event.target.offsetParent.offsetParent.style = "visibility : hidden"
}