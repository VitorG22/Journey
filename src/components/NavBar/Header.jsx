import React from 'react'
import { useState , useContext } from 'react'
import { AppContext } from '../../App'

export function Header() {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
    const {setPageSelected} = useContext(AppContext)

    return (
        <>

            <nav class=" flex flex-row justify-between p-4   items-center ">
                <img class="h-10 w-10" src="shared/logo.svg" alt="" srcset="" />
                <details class="z-30" >
                    <summary class="inline " onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}>
                        {hamburgerIsOpen ? (
                            <>
                                <div class ="h-screen w-screen bg-slate-950/80 fixed top-0 left-0 -z-10"></div>
                                <img class="h-7 w-7 fixed top-5 right-5 " src="shared\icon-close.svg" />
                            </>
                        ) : (
                            <img class="h-7 w-7  " src="shared\icon-hamburger.svg" />
                        )}
                    </summary>
                    <ul class=" fixed top-0 right-0 h-screen w-40 -z-10 pt-16  gap-1 bg-slate-950/80 backdrop-blur-[5px] flex flex-col items-end">
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500 text-xl"><button onClick={() => setPageSelected("home")}>Home</button></li>
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500 text-xl"><button onClick={() => setPageSelected("destination")}>Destination</button></li>
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500 text-xl"><button onClick={() => setPageSelected("crew")}>Crew</button></li>
                        <li class="text-neutral-300 font-semibold hover:bg-slate-800 w-full py-3 px-4 flex justify-end transition ease 500 text-xl"><button onClick={() => setPageSelected("technology")}>Technology</button></li>
                    </ul>
                </details>

            </nav>

        </>
    )
}