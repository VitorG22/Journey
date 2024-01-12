import React from "react";
import { BottomGradient } from "../background/BottomGradient";
import { ArrayDestinos } from "./ArrayDestinos";
import { Title } from "../other/TitleComponent";
import { SectionContainer } from "../other/SectionContainer";
import { NameComponent } from "../other/NameComponent";
import { DescripitionComponent } from "../other/DesciprtionComponent";


export function Destination() {
    return (
        <>
            <SectionContainer>

                <Title number="01" title="PICK YOUR DESTINATION" />
                <img src={`${ArrayDestinos[0].imagePath}`} alt="" class="w-10/12 my-6 " />
                <ul class="flex flex-row gap-4">
                    {ArrayDestinos.map((element) => {
                        return <li class="text-neutral-300 font-semibold">{element.name}</li>
                    })
                    }
                </ul>
                <NameComponent>{ArrayDestinos[0].name}</NameComponent>
                <DescripitionComponent>{ArrayDestinos[0].descipition}</DescripitionComponent>
                {/* <p class="text-neutral-300 text-center text-sm  w-4/5">{ArrayDestinos[0].descipition}</p> */}
                <span class="h-1 w-10/12 my-4 bg-neutral-300/10 rounded-lg"></span>
                <ul class="flex flex-row gap-6 mb-12 ">
                    <li class=" flex flex-col justify-center items-center">
                        <h4 class="text-sm text-slate-400  ">Avg. Distance</h4>
                        <h2 class="text-2xl text-neutral-300">{ArrayDestinos[0].distance} {ArrayDestinos[0].distanceMeasure}</h2>
                    </li>

                    <li class="flex flex-col justify-center items-center">
                        <h4 class="text-sm text-slate-400  ">Est. Travel Time</h4>
                        <h2 class="text-2xl text-neutral-300">{ArrayDestinos[0].travelTimeNum} {ArrayDestinos[0].travelTimeMeasure}</h2>
                    </li>
                </ul>
            </SectionContainer>
            <BottomGradient />
        </>
    )
}