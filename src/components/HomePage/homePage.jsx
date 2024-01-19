import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { animateReset } from '../other/animationReset'

export function HomePage() {
    const { setPageSelected, windowWidht } = useContext(AppContext)

    setTimeout(() => {
        animateReset('homePageItem', 'from-top', 300)
    }, 1)

    return (
        <>
            <section class=" 
            text-neutral-300  flex flex-row justify-center text-center h-3/4 items-start  
            md:h-3/4  md:items-center md:text-left md:justify-between
            ">
                <div class='flex flex-col h-full w-3/4 items-center justify-evenly   
                    md:ml-[8vw] md:items-start md:w-1/3 md:justify-center md:gap-4
                '>

                    <p class="homePageItem  text-sm md:text-lg">So, you want to travel to </p>
                    <h1 class="homePageItem  font-serif text-6xl md:text-9xl ">SPACE</h1>
                    <p class="homePageItem  text-sm md:text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    {windowWidht != "desktop" ? (<button onClick={() => setPageSelected("destination")} class=" homePageItem font-serif  bg-neutral-300 text-slate-950 h-32 w-32 rounded-full mt-8 ">EXPLORE</button>) : ("")}
                </div>
                {windowWidht == "desktop" ? (<button onClick={() => setPageSelected("destination")} class=" homePageItem font-serif  bg-neutral-300 text-slate-950 h-56 w-56 rounded-full text-2xl mr-[20vw] ">EXPLORE</button>) : ("")}
            </section>

            
        </>
    )
}