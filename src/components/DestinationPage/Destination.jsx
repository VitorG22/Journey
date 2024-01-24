import React, { useContext, useEffect, useState } from "react";
import { BottomGradient } from "../background/BottomGradient";
import { ArrayDestinos } from "./ArrayDestinos";
import { Title } from "../other/TitleComponent";
import { SectionContainer } from "../other/SectionContainer";
import { NameComponent } from "../other/NameComponent";
import { DescripitionComponent } from "../other/DesciprtionComponent";
import { animateReset } from "../other/animationReset";
import { AppContext } from "../../App";
import { Render3DObject } from "../3DObjects/Render3dObject";
import { SwitchButton } from "../other/switchButton";

export function Destination() {
    const [destinoSelecionado, setDestinoSelecionado] = useState(0)
    const [view3DObjects, setView3DObjects] = useState(false)
    const { windowWidht } = useContext(AppContext)

    useEffect(() => {
        animateReset("destinationText", "from-bottom", 200)
        animateReset("destinationNums", "from-bottom", 0, 700)
        animateReset("destinationNames", "fade-in", 0)

    }, [])


    useEffect(() => {
        if (view3DObjects) {
            switch (destinoSelecionado) {
                case 0:
                    Render3DObject('moon.glb')
                    break
                case 1:
                    Render3DObject('mars.glb')
                    break
                case 2:
                    Render3DObject('europa.glb')
                    break
                case 3:
                    Render3DObject('titan.glb')
                    break

            }
        }
    }, [destinoSelecionado, view3DObjects])


    return (
        <>
            <SectionContainer>
                <div class="
                    flex flex-col justify-around items-center
                    md:flex-row-reverse md:justify-center md:px-10 md:w-full md:gap-32 md:h-full
                ">
                    <Title number="01" title="PICK YOUR DESTINATION" />
                    {windowWidht != "desktop" ? (
                                <SwitchButton funct={setView3DObjects} value={view3DObjects}><div className="text-thin text-xs">{view3DObjects ? ("Disable") : ("Enable")} 3D Objects</div></SwitchButton>
                        ) : ("")}
                    <section class=" w-10/12 aspect-square flex justify-center items-center my-6 animate-fadeIn md:w-2/6 ">
                        
                        {view3DObjects ?
                            <div id="ThreeJsCanvasContainer" class="relative h-full w-full">
                                <canvas id="ThreeJsCanvas" class="absolute -z-10 top-0 left-0 h-full w-full"></canvas>
                            </div>
                            :
                            <img src={`${ArrayDestinos[destinoSelecionado].imagePath}`} alt="" />

                        }
                        
                    </section>
                    
                    <div class="
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
                                            animateReset("destinationNums", "from-bottom", 1, 700)
                                        }
                                        }>
                                            {element.name}
                                        </button>
                                    </li>
                                )
                            })
                            }
                        </ul>
                        {windowWidht != "desktop" ? (<NameComponent className="destinationText">{ArrayDestinos[destinoSelecionado].name}</NameComponent>) : ("")}
                        <DescripitionComponent className="destinationText"><p class="md:text-end">{ArrayDestinos[destinoSelecionado].descipition}</p></DescripitionComponent>
                        {windowWidht != "desktop" ? <span class="destinationText h-1 w-10/12 my-4 bg-neutral-300/10 rounded-lg"></span> : ""}
                        <ul class="destinationNums flex flex-row gap-6 mb-12 md:mb-0  ">
                            <li class=" flex flex-col justify-center items-center md:justify-center md:items-end">
                                <h4 class="text-sm text-slate-400 md:text-md  ">Avg. Distance</h4>
                                <h2 class=" text-2xl text-neutral-300 md:text-3xl">{ArrayDestinos[destinoSelecionado].distance} {ArrayDestinos[destinoSelecionado].distanceMeasure}</h2>
                            </li>

                            <li class=" flex flex-col justify-center items-center md:justify-center md:items-end">
                                <h4 class="text-sm text-slate-400 md:text-md  ">Est. Travel Time</h4>
                                <h2 class=" text-2xl text-neutral-300 md:text-3xl">{ArrayDestinos[destinoSelecionado].travelTimeNum} {ArrayDestinos[destinoSelecionado].travelTimeMeasure}</h2>
                            </li>
                        </ul>
                        {windowWidht == "desktop" ? (
                                <SwitchButton funct={setView3DObjects} value={view3DObjects}>{view3DObjects ? ("Disable") : ("Enable")} 3D Objects</SwitchButton>
                        ) : ("")}
                    </div>
                </div>
            </SectionContainer>
            <BottomGradient />

        </>
    )
}
