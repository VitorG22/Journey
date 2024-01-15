import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { animateReset } from '../other/animationReset'

export function HomePage() {
    const {setPageSelected} = useContext(AppContext)
    
    return (
        <>
            <div  class="text-neutral-300 pt-4 flex flex-col items-center text-center  ">
                <p   class= "homePageItem ">So, you want to travel to </p>
                <h1  class = "homePageItem text-7xl m-4 ">SPACE</h1>
                <p  class = "homePageItem  w-3/4 ">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                <button onClick={() => setPageSelected("destination")} class = " homePageItem bg-neutral-300 text-slate-950 h-32 w-32 rounded-full mt-8 ">EXPLORE</button>
            </div>
            {setTimeout(() => {
                animateReset('homePageItem' , 'from-top' , 300)
            }, 1)}
        </>
    )
}