import React from 'react'
import { useState } from 'react'
import { Title } from '../other/TitleComponent'
import { SectionContainer } from '../other/SectionContainer'
import { ArrayCrew } from './ArrayCrew'
import { NameComponent } from '../other/NameComponent'
import { DescripitionComponent } from '../other/DesciprtionComponent'
import { SelecCrewButtons } from './SelectCrewButtons'

export function Crew() {
    const [crewSelectedPerson, setCrewSelectedPerson] = useState(0)
    return (
        <SectionContainer>
            <Title number="02" title="MEET YOUR CREW" />
            <h3 class="text-neutral-300 text-lg tracking-widest mt-4">{ArrayCrew[crewSelectedPerson].office}</h3>
            <NameComponent>{ArrayCrew[crewSelectedPerson].name}</NameComponent>
            <DescripitionComponent>{ArrayCrew[crewSelectedPerson].descipition}</DescripitionComponent>
            <ul class ="flex flex-row gap-6 mt-4">
                <SelecCrewButtons num={0} setCrewSelectedPerson={setCrewSelectedPerson}  defaultChecked = {crewSelectedPerson == 0 ? true : false}/>
                <SelecCrewButtons num={1} setCrewSelectedPerson={setCrewSelectedPerson}  defaultChecked = {crewSelectedPerson == 1 ? true : false}/>
                <SelecCrewButtons num={2} setCrewSelectedPerson={setCrewSelectedPerson}  defaultChecked = {crewSelectedPerson == 2 ? true : false}/>
                <SelecCrewButtons num={3} setCrewSelectedPerson={setCrewSelectedPerson}  defaultChecked = {crewSelectedPerson == 3 ? true : false}/>
            </ul>
            {/* <ul>
                {ArrayCrew.map((element ,index ) => function(){
                    return(
                        <li><input type="radio" onClickCapture={() => setCrewSelectedPerson(3)} name='crewInput' class = "h-4 w-4 bg-neutral-300 rounded-full">{index}</input></li>
                    )
                })}
                <li><input type="radio" onClickCapture={() => setCrewSelectedPerson(3)} name='crewInput' class = "h-4 w-4 bg-neutral-300 rounded-full"></input></li>
            </ul> */}
            <img src={`${ArrayCrew[crewSelectedPerson].imagePath}`} alt="" srcset="" class="  max-w-80 mt-4" />
        </SectionContainer>
    )
}


