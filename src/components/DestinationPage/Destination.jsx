import React from "react";
import { Background } from "../background/Background";
import { BottomGradient } from "../background/BottomGradient";
import { ArrayDestinos } from "./ArrayDestinos"; 


export function Destination() {
    return (
        <>
            <section class = "flex flex-col relative items-center z-20 ">
                <h1 class="text-neutral-300 font-thin"><span class= "text-slate-300 font-bold">01</span> PICK YOUR DESTINATION</h1>
                <img src={`${ArrayDestinos[0].imagePath}`} alt="" class = "w-10/12 my-6 "/>
                <ul class="flex flex-row gap-4">
                    {ArrayDestinos.map((element) => {
                            return <li class= "text-neutral-300 font-semibold">{element.name}</li>
                        })
                    }
                </ul>
                <h1 class="text-neutral-300 text-center text-4xl my-2 w-4/5">{ArrayDestinos[0].name}</h1>
                <p class= "text-neutral-300 text-center text-sm  w-4/5">{ArrayDestinos[0].descipition}</p>
                <span class="h-1 w-10/12 my-4 bg-neutral-300/10 rounded-lg"></span>
                <ul class = "flex flex-row gap-6 mb-12 ">
                    <li class=" flex flex-col justify-center items-center">
                        <h4 class = "text-sm text-slate-400  ">Avg. Distance</h4>
                        <h2 class ="text-2xl text-neutral-300">{ArrayDestinos[0].distance} {ArrayDestinos[0].distanceMeasure}</h2>
                    </li>

                    <li class="flex flex-col justify-center items-center">
                        <h4 class = "text-sm text-slate-400  ">Est. Travel Time</h4>
                        <h2 class ="text-2xl text-neutral-300">{ArrayDestinos[0].travelTimeNum} {ArrayDestinos[0].travelTimeMeasure}</h2>
                    </li>
                </ul>
            </section>
            <BottomGradient/>
        </>
    )
}