import React from 'react'
import { useState } from 'react'
import { Title } from '../other/TitleComponent'
import { SectionContainer } from '../other/SectionContainer'
import { ArrayCrew } from './ArrayCrew'
import { NameComponent } from '../other/NameComponent'
import { DescripitionComponent } from '../other/DesciprtionComponent'
import { SelectButtons } from '../other/SelectButtons'
import { BottomGradient } from '../background/BottomGradient'
import { animateReset } from '../other/animationReset'

export function Crew() {
    const [crewSelectedPerson, setCrewSelectedPerson] = useState(0)

    setTimeout(() => {
        animateReset("crewText", "from-right", 200)
        animateReset("crewImage", "fade-in", 0, 600)
    }, 1)

    return (
        <>
            <SectionContainer>
                <div class="
                    flex flex-col justify-center items-center
                    md:flex-row-reverse md:justify-center md:px-10 md:w-full md:gap-32 md:h-full
                ">
                    <section class="
                        flex flex-col items-center 
                        md:items-start md:w-1/3
                    ">

                        <Title number="02" title="MEET YOUR CREW" />
                        <ul class="flex flex-row gap-6 mt-4 ">
                            {ArrayCrew.map((element, index) => {
                                return (<li class="fade-in"
                                    onClick={() => {
                                        animateReset("crewText", "from-right", 200)
                                        animateReset("crewImage", "fade-in", 0, 600)
                                    }}
                                ><SelectButtons num={index} setSelectedButton={setCrewSelectedPerson} defaultChecked={crewSelectedPerson == index ? true : false} /></li>
                                )
                            })}
                        </ul>
                        <h3 class="crewText text-neutral-300 text-lg tracking-widest mt-4 whitespace-nowrap">{ArrayCrew[crewSelectedPerson].office}</h3>
                        <NameComponent className="crewText">{ArrayCrew[crewSelectedPerson].name}</NameComponent>
                        <DescripitionComponent className="crewText">{ArrayCrew[crewSelectedPerson].descipition}</DescripitionComponent>
                    </section>
                    <div class="md:h-3/4">
                        <img src={`${ArrayCrew[crewSelectedPerson].imagePath}`} alt="" srcset="" class="crewImage max-w-xs max-h-xs  mt-4 linear-mask-image md:max-w-prose md:max-h-full" />
                    </div>
                </div>
            </SectionContainer>
            <BottomGradient />

        </>
    )
}


