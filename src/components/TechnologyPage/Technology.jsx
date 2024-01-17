import React, { useState, useContext } from 'react'
import { NameComponent } from '../other/NameComponent'
import { SectionContainer } from '../other/SectionContainer'
import { Title } from '../other/TitleComponent'
import { ArrayTechnology } from './ArrayTechnology'
import { DescripitionComponent } from '../other/DesciprtionComponent'
import { SelectButtons } from '../other/SelectButtons'
import { animateReset } from '../other/animationReset'
import { BottomGradient } from '../background/BottomGradient'
import { AppContext } from '../../App'
import { ButtonGenerate } from './ButtonsGeneratos'

export function Technology() {
    const { windowWidht } = useContext(AppContext)
    const [technologySelected, setTechnologySelected] = useState(0)

    setTimeout(() => {
        animateReset("technologyImage", "fade-in", 200)
        animateReset("technologyText", "from-bottom", 200, 200)
    }, 1)

    return (
        <>
            <SectionContainer>
                <div class="
                    flex flex-col justify-center items-center
                    md:flex-row-reverse md:justify-center md:px-10 md:w-full md:gap-32 md:h-full
                ">
                    <Title number="03" title="SPACE LAUNCH 101" />
                    <section class=" flex flex-col items-center md:flex-row md:items-center md:gap-4 md:h-full">

                        {windowWidht == "desktop" ? "" : <ul class="flex flex-row gap-6 mt-4 md:flex-col">
                            <ButtonGenerate array={ArrayTechnology} setTechnologySelected={setTechnologySelected} technologySelected={technologySelected} />
                        </ul>}
                        <div class="md:h-3/4"> 
                            <img class="technologyImage my-4 linear-mask-image md:h-full" src={ArrayTechnology[technologySelected].image["mobile"]} alt="" srcset="" />
                        </div>
                    </section>
                    <section class=" md:w-1/3  md:flex md:flex-row md:items-center md:gap-6 ">

                        <div class=" pb-10 flex flex-col items-center md:items-end">
                            <NameComponent className="technologyText">
                                <h1 class="md:text-end">{ArrayTechnology[technologySelected].name}</h1>
                            </NameComponent>
                            <DescripitionComponent className="technologyText">
                                <h2 class="scroll-hidden md:text-end  md:max-h-[40vh] overflow-y-scroll">
                                    {ArrayTechnology[technologySelected].descrption}
                                </h2>
                            </DescripitionComponent>
                        </div>
                        {
                            windowWidht == "desktop" ? (
                                <ul class="flex flex-row gap-6 mt-4 md:flex-col">
                                    <ButtonGenerate array={ArrayTechnology} setTechnologySelected={setTechnologySelected} technologySelected={technologySelected} />
                                </ul>)
                                : ""
                        }
                    </section>
                </div>
            </SectionContainer>
            <BottomGradient />


        </>
    )
}
