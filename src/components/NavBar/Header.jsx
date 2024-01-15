import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../../App'
import { animateReset } from '../other/animationReset'
import { ArrayIcons } from '../../../public/shared/ArrayIcons'
import { Background } from '../background/Background'


export function Header() {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
    const { setPageSelected ,pageSelected } = useContext(AppContext)

    return (
        <>

            <nav class=" flex flex-row justify-between p-4   items-center ">
                <img class="h-10 w-10" src="shared/logo.svg" alt="" srcset="" />
                <details id='navBarDetails' class="z-30"  >
                    <summary class="inline "
                        onClick={() => {
                            setHamburgerIsOpen(!hamburgerIsOpen)
                            animateReset("menuLateral", 'from-right', 0)
                        }}>
                        {hamburgerIsOpen ? (
                            <>
                                <div class="menuLateralAssets h-screen w-screen bg-slate-950/80 fixed top-0 left-0 -z-10  hidden"></div>
                                <div class="menuLateralAssets h-7 w-7 fixed top-5 right-5 hidden">{ArrayIcons.iconClose}</div>
                                {setTimeout(() => {
                                    { animateReset('menuLateralAssets', 'fade-in', 0) }
                                    { animateReset('menuLateralButtons', 'from-right', 200) }

                                }, 1)}
                            </>
                        ) : (
                            <div class="h-7 w-7  ">{ArrayIcons.iconHamburger}</div>
                        )}
                    </summary>
                    <ul class="menuLateral fixed top-0 right-0 h-screen w-40 -z-10 pt-16  gap-1 bg-slate-950/80 backdrop-blur-[5px] flex flex-col items-end  ">
                        <li class={`menuLateralButtons hidden text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end transition ease text-xl fill-neutral-300 ${pageSelected == "home" ? "bg-neutral-300 text-slate-950 fill-slate-950" : " hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen , hamburgerIsOpen)} ><button class="flex flex-row gap-2 items-center " onClick={() => { setPageSelected("home") }}>Home {ArrayIcons.home} </button></li>
                        <li class={`menuLateralButtons hidden text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end transition ease text-xl fill-neutral-300 ${pageSelected == "destination" ? "bg-neutral-300 text-slate-950 fill-slate-950" : " hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen , hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("destination")}>Destination {ArrayIcons.planet}</button></li>
                        <li class={`menuLateralButtons hidden text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end transition ease text-xl fill-neutral-300 ${pageSelected == "crew" ? "bg-neutral-300 text-slate-950 fill-slate-950" : " hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen , hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("crew")}>Crew  {ArrayIcons.crew}</button></li>
                        <li class={`menuLateralButtons hidden text-neutral-300 font-semibold w-full py-3 px-4 flex justify-end transition ease text-xl fill-neutral-300 ${pageSelected == "technology" ? "bg-neutral-300 text-slate-950 fill-slate-950" : " hover:bg-slate-800/50"} `} onClick={() => closeDetails(setHamburgerIsOpen , hamburgerIsOpen)}><button class="flex flex-row gap-2 items-center " onClick={() => setPageSelected("technology")}>Technology<span class="-rotate-45 ">{ArrayIcons.rocket}</span></button></li>
                    </ul>
                </details>

            </nav>

        </>
    )
}

function closeDetails(setHamburgerIsOpen , hamburgerIsOpen) {
    var navBarDetails = document.getElementById("navBarDetails")
    navBarDetails.removeAttribute("open");
    setHamburgerIsOpen(!hamburgerIsOpen)
}