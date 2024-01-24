import React from "react";

export function Modal(props){
    return(
        <div  id={props.idDoModal} class="bg-slate-950/80 h-screen w-screen  fixed top-0 left-0 z-50 flex justify-center items-center ">
            <div class = "bg-slate-900 py-4 rounded-lg w-3/4 md:w-1/5 flex flex-col items-center justify-center gap-6 text-left relative fade-in py-8 px-6 ">
                <button onClick={() => closeModal(props.idDoModal)} class = "text-neutral-300 absolute top-2 right-4 ">X</button>
                {props.children}
            </div>
        </div>
    )
}

function closeModal(idDoModal){
    var element = document.getElementById(idDoModal)
    element.parentElement.removeChild(element)
}