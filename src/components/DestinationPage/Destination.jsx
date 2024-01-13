import React, { useState } from "react";
import { BottomGradient } from "../background/BottomGradient";
import { ArrayDestinos } from "./ArrayDestinos";
import { Title } from "../other/TitleComponent";
import { SectionContainer } from "../other/SectionContainer";
import { NameComponent } from "../other/NameComponent";
import { DescripitionComponent } from "../other/DesciprtionComponent";


export function Destination() {
    const [destinoSelecionado , setDestinoSelecionado] = useState(0)
    
    
    return (
        <>
            <SectionContainer>

                <Title number="01" title="PICK YOUR DESTINATION" />
                <img src={`${ArrayDestinos[destinoSelecionado].imagePath}`} alt="" class="w-10/12 my-6 animate-fadeIn " />
                <ul class="flex flex-row gap-4">
                    {ArrayDestinos.map((element , index) => {
                        return (
                            <li class={`text-neutral-300 font-semibold transition ease duration-500  ${index == destinoSelecionado ? "border-b border-neutral-300 -translate-y-1 " : " "}`}>
                                <button onClick={() => setDestinoSelecionado(index)}>
                                    {element.name}
                                </button>
                            </li>
                            )
                    })
                    }
                </ul>
                <NameComponent>{ArrayDestinos[destinoSelecionado].name}</NameComponent>
                <DescripitionComponent>{ArrayDestinos[destinoSelecionado].descipition}</DescripitionComponent>
                <span class="h-1 w-10/12 my-4 bg-neutral-300/10 rounded-lg"></span>
                <ul class="flex flex-row gap-6 mb-12 ">
                    <li class=" flex flex-col justify-center items-center">
                        <h4 class="text-sm text-slate-400  ">Avg. Distance</h4>
                        <h2 class="text-2xl text-neutral-300">{ArrayDestinos[destinoSelecionado].distance} {ArrayDestinos[0].distanceMeasure}</h2>
                    </li>

                    <li class="flex flex-col justify-center items-center">
                        <h4 class="text-sm text-slate-400  ">Est. Travel Time</h4>
                        <h2 class="text-2xl text-neutral-300">{ArrayDestinos[destinoSelecionado].travelTimeNum} {ArrayDestinos[0].travelTimeMeasure}</h2>
                    </li>
                </ul>
            </SectionContainer>
            <BottomGradient />
        </>
    )
}