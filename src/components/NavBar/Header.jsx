import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../../App'
import { animateReset } from '../other/animationReset'
import { ArrayIcons } from '../../../public/shared/ArrayIcons'


export function Header() {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
    const { setPageSelected, pageSelected, windowWidht } = useContext(AppContext)

    return (
        <>
            {/* <div class="bg-purple-500 sm:bg-sky-500 md:bg-amber-500 h-4 w-screen"></div> */}
            <nav class="flex flex-row justify-between p-4 items-center ">
                <img class="h-10 w-10" src="shared/logo.svg" alt="" srcset="" />
                {windowWidht == "desktop" ? (
                    <ul class="  gap-1 bg-slate-950/50 backdrop-blur-[5px] flex flex-row ">
                        <li class={`menuLateralButtons text-neutral-300  py-2 px-4 flex justify-end transition ease duration-500 text-xl fill-neutral-300 ${pageSelected == "home" ? " border-b-2 border-slate-950 fill-slate-950 bg-neutral-300 text-slate-950 font-semibold" : "font-thin hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)} ><button class="flex flex-row gap-2 items-center " onClick={() => { setPageSelected("home") }}>Home {ArrayIcons.home} </button></li>
                        <li class={`menuLateralButtons text-neutral-300  py-2 px-4 flex justify-end transition ease duration-500 text-xl fill-neutral-300 ${pageSelected == "destination" ? " border-b-2 border-slate-950 fill-slate-950 bg-neutral-300 text-slate-950 font-semibold" : "font-thin hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("destination")}>Destination {ArrayIcons.planet}</button></li>
                        <li class={`menuLateralButtons text-neutral-300  py-2 px-4 flex justify-end transition ease duration-500 text-xl fill-neutral-300 ${pageSelected == "crew" ? " border-b-2 border-slate-950 fill-slate-950 bg-neutral-300 text-slate-950 font-semibold" : "font-thin hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("crew")}>Crew  {ArrayIcons.crew}</button></li>
                        <li class={`menuLateralButtons text-neutral-300  py-2 px-4 flex justify-end transition ease duration-500 text-xl fill-neutral-300 ${pageSelected == "technology" ? " border-b-2 border-slate-950 fill-slate-950 bg-neutral-300 text-slate-950 font-semibold" : "font-thin hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("technology")}>Technology<span class="-rotate-45 ">{ArrayIcons.rocket}</span></button></li>
                    </ul>
                ) :
                    (
                        <details id='navBarDetails' class="z-30"  >
                            <summary class="inline "
                                onClick={() => {
                                    setHamburgerIsOpen(!hamburgerIsOpen)
                                    animateReset("menuLateral", 'from-right', 0)
                                }}>
                                {hamburgerIsOpen ? (
                                    <>
                                        <div class="menuLateralAssets h-screen w-screen bg-slate-950/80 fixed top-0 left-0 -z-10  "></div>
                                        <div class="menuLateralAssets h-7 w-7 fixed top-5 right-5 ">{ArrayIcons.iconClose}</div>
                                        {setTimeout(() => {
                                            { animateReset('menuLateralAssets', 'fade-in', 0) }
                                            { animateReset('menuLateralButtons', 'from-right', 200) }

                                        }, 1)}
                                    </>
                                ) : (
                                    <div class=" flex items-center ">{ArrayIcons.iconHamburger}</div>
                                )}
                            </summary>
                            <ul class="menuLateral fixed top-0 right-0 h-screen w-40 -z-10 pt-16  gap-1 bg-slate-950/80 backdrop-blur-[5px] flex flex-col items-end  ">
                                <li class={`menuLateralButtons  text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end text-xl fill-neutral-300 ${pageSelected == "home" ? "bg-neutral-300  text-slate-950 fill-slate-950" : " hover:bg-slate-800/50 hover:translate hover:ease hover:duration-500"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)} ><button class="flex flex-row gap-2 items-center " onClick={() => { setPageSelected("home") }}>Home {ArrayIcons.home} </button></li>
                                <li class={`menuLateralButtons  text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end text-xl fill-neutral-300 ${pageSelected == "destination" ? "bg-neutral-300  text-slate-950 fill-slate-950" : " hover:bg-slate-800/50 hover:translate hover:ease hover:duration-500"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("destination")}>Destination {ArrayIcons.planet}</button></li>
                                <li class={`menuLateralButtons  text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end text-xl fill-neutral-300 ${pageSelected == "crew" ? "bg-neutral-300  text-slate-950 fill-slate-950" : " hover:bg-slate-800/50 hover:translate hover:ease hover:duration-500"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("crew")}>Crew  {ArrayIcons.crew}</button></li>
                                <li class={`menuLateralButtons  text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end text-xl fill-neutral-300 ${pageSelected == "technology" ? "bg-neutral-300  text-slate-950 fill-slate-950" : " hover:bg-slate-800/50 hover:translate hover:ease hover:duration-500"} `} onClick={() => closeDetails(setHamburgerIsOpen, hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("technology")}>Technology<span class="-rotate-45 ">{ArrayIcons.rocket}</span></button></li>
                            </ul>
                        </details>
                    )}

            </nav>

        </>
    )
}

function closeDetails(setHamburgerIsOpen, hamburgerIsOpen) {
    var navBarDetails = document.getElementById("navBarDetails")
    navBarDetails.removeAttribute("open");
    setHamburgerIsOpen(!hamburgerIsOpen)
}