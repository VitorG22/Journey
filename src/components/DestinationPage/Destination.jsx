import React, { useContext, useState } from "react";
import { BottomGradient } from "../background/BottomGradient";
import { ArrayDestinos } from "./ArrayDestinos";
import { Title } from "../other/TitleComponent";
import { SectionContainer } from "../other/SectionContainer";
import { NameComponent } from "../other/NameComponent";
import { DescripitionComponent } from "../other/DesciprtionComponent";
import { animateReset } from "../other/animationReset";
import { AppContext } from "../../App";

export function Destination() {
    const [destinoSelecionado, setDestinoSelecionado ] = useState(0)
    const{windowWidht} =useContext(AppContext)

    setTimeout(() => {
        animateReset("destinationText", "from-bottom", 200)
        animateReset("destinationNums", "from-bottom", 0, 700)
        animateReset("destinationNames", "fade-in", 0)

    }, 1)


    return (
        <>
            <SectionContainer>
                <div class="
                    flex flex-col justify-around items-center
                    md:flex-row-reverse md:justify-center md:px-10 md:w-full md:gap-32 md:h-full
                ">
                    <Title number="01" title="PICK YOUR DESTINATION" />
                    <img src={`${ArrayDestinos[destinoSelecionado].imagePath}`} alt="" class="w-10/12 my-6 animate-fadeIn md:w-2/6 " />
                    <div class ="
                        flex flex-col gap-8 items-center
                        md:items-end md:w-1/3
                        ">

                        <ul class="flex flex-row gap-4 md:items-end ">
                            {ArrayDestinos.map((element, index) => {
                                return (
                                    <li class={`
                                        destinationNames text-neutral-300 font-semibold  ${index == destinoSelecionado ? "border-b border-neutral-300 -translate-y-1 " : " "} 
                                        md:font-thin ${index == destinoSelecionado ? "md:text-neutral-300 md:text-4xl" : "md:text-neutral-300/30 md:text-2xl"}
                                    `}>
                                        <button onClick={() => {
                                            setDestinoSelecionado(index)
                                            animateReset("destinationText", "from-bottom", 200)
                                            animateReset("destinationNums", "from-bottom", 0, 700)
                                        }
                                        }>
                                            {element.name}
                                        </button>
                                    </li>
                                )
                            })
                            }
                        </ul>
                        {windowWidht != "desktop" ? ( <NameComponent className="destinationText">{ArrayDestinos[destinoSelecionado].name}</NameComponent> ): ("")}
                        <DescripitionComponent className="destinationText"><p class="md:text-end">{ArrayDestinos[destinoSelecionado].descipition}</p></DescripitionComponent>
                        {windowWidht != "desktop" ? <span class="destinationText h-1 w-10/12 my-4 bg-neutral-300/10 rounded-lg"></span> : ""}
                        <ul class="flex flex-row gap-6 mb-12 md:mb-0  ">
                            <li class="destinationNums flex flex-col justify-center items-center md:justify-center md:items-end">
                                <h4 class="text-sm text-slate-400 md:text-md  ">Avg. Distance</h4>
                                <h2 class=" text-2xl text-neutral-300 md:text-3xl">{ArrayDestinos[destinoSelecionado].distance} {ArrayDestinos[0].distanceMeasure}</h2>
                            </li>

                            <li class="destinationNums flex flex-col justify-center items-center md:justify-center md:items-end">
                                <h4 class="text-sm text-slate-400 md:text-md  ">Est. Travel Time</h4>
                                <h2 class=" text-2xl text-neutral-300 md:text-3xl">{ArrayDestinos[destinoSelecionado].travelTimeNum} {ArrayDestinos[0].travelTimeMeasure}</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionContainer>
            <BottomGradient />

        </>
    )
}