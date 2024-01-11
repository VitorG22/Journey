import React from 'react'
import { useState } from 'react'

export function Header() {
    const [hamburgerIsOpen, setHamburgerIsOpen ] = useState(false)

    return (
        <>

            <nav class=" flex flex-row justify-between p-4   items-center ">
                <img class="h-7 w-7" src="Journey-To-Space/src/assets/shared/logo.svg" alt="" srcset="" />
                <details class="z-30" >
                    <summary class="inline " onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}>
                        {hamburgerIsOpen ? (

                            <img class="h-4 w-4 " src=".\src\assets\shared\icon-close.svg" />
                        ):(
                            <img class="h-4 w-4 " src="./Journey-To-Space\src\assets\shared\icon-hamburger.svg" />
                        )}
                    </summary>
                    <ul class=" absolute top-0 right-0 h-full w-32 -z-10 pt-16  gap-1 bg-slate-950/80 backdrop-blur-[5px] flex flex-col items-end">
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500"><button  href = "#">Home</button></li>
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500"><button  href = "#">Destination</button></li>
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500"><button  href = "#">Crew</button></li>
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500"><button  href = "#">Technology</button></li>
                    </ul>
                </details>

            </nav>
            
        </>
    )
}