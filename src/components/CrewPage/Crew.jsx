import React from 'react'
import { useState } from 'react'
import { Title } from '../other/TitleComponent'
import { SectionContainer } from '../other/SectionContainer'
import { ArrayCrew } from './ArrayCrew'
import { NameComponent } from '../other/NameComponent'
import { DescripitionComponent } from '../other/DesciprtionComponent'
import { SelecCrewButtons } from './SelectCrewButtons'
import { BottomGradient } from '../background/BottomGradient'
import { animateReset } from '../other/animationReset'

export function Crew() {
    const [crewSelectedPerson, setCrewSelectedPerson] = useState(0)
    return (
        <>
            <SectionContainer>
                <Title number="02" title="MEET YOUR CREW" />
                <ul class="flex flex-row gap-6 mt-4">
                    {ArrayCrew.map((element, index) => {
                        return (<li class = "fade-in"
                            onClick={() => {
                                animateReset("crewText", "from-right", 200)
                                animateReset("crewImage", "fade-in", 0, 600)
                            }}
                        ><SelecCrewButtons num={index} setCrewSelectedPerson={setCrewSelectedPerson} defaultChecked={crewSelectedPerson == index ? true : false} /></li>
                        )
                    })}
                </ul>
                <h3 class="crewText text-neutral-300 text-lg tracking-widest mt-4 whitespace-nowrap">{ArrayCrew[crewSelectedPerson].office}</h3>
                <NameComponent className="crewText">{ArrayCrew[crewSelectedPerson].name}</NameComponent>
                <DescripitionComponent className="crewText">{ArrayCrew[crewSelectedPerson].descipition}</DescripitionComponent>
                <img src={`${ArrayCrew[crewSelectedPerson].imagePath}`} alt="" srcset="" class="crewImage max-w-80 max-h-80  mt-4 linear-mask-image" />
            </SectionContainer>
            <BottomGradient />
            {setTimeout(() => {
                animateReset("crewText", "from-right", 200)
                animateReset("crewImage", "fade-in", 0, 600)
            }, 1)}
        </>
    )
}


