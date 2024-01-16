import React, { useState } from 'react'
import { NameComponent } from '../other/NameComponent'
import { SectionContainer } from '../other/SectionContainer'
import { Title } from '../other/TitleComponent'
import { ArrayTechnology } from './ArrayTechnology'
import { DescripitionComponent } from '../other/DesciprtionComponent'
import { SelectButtons } from '../other/SelectButtons'
import { animateReset } from '../other/animationReset'
import {BottomGradient} from '../background/BottomGradient'

export function Technology() {
    const [technologySelected, setTechnologySelected] = useState(0)
    return (
        <>
            <SectionContainer>
                <Title number="03" title="SPACE LAUNCH 101" />
                <ul class="flex flex-row gap-6 mt-4">
                    {ArrayTechnology.map((element, index) => {
                        return (
                            <li class="fade-in"
                                onClick={() => {
                                    animateReset("technologyImage", "fade-in", 200 )
                                    animateReset("technologyText", "from-bottom", 200, 200)
                                }}
                            ><SelectButtons num={index} setSelectedButton={setTechnologySelected} defaultChecked={technologySelected == index ? true : false} />
                            </li>
                        )
                    })}
                </ul>
                <img class="technologyImage my-4  linear-mask-image" src={ArrayTechnology[technologySelected].pathImagePortrait} alt="" srcset="" />
                <NameComponent className="technologyText">
                    <h1>{ArrayTechnology[technologySelected].name}</h1>
                </NameComponent>
                <DescripitionComponent className="technologyText">
                    <h2>
                        {ArrayTechnology[technologySelected].descrption}
                    </h2>
                </DescripitionComponent>
            </SectionContainer>
            <BottomGradient />
            {setTimeout(() => {
                animateReset("technologyImage", "fade-in", 200)
                animateReset("technologyText", "from-bottom", 200, 200)
            }, 1)}

        </>
    )
}