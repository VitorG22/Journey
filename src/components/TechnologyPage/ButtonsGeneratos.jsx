import { SelectButtons } from "../other/SelectButtons"

export function ButtonGenerate({ array, setTechnologySelected, technologySelected }) {
    return (<>
        {array.map((element, index) => {
            return (
                <li class="fade-in"
                    onClick={() => {
                        animateReset("technologyImage", "fade-in", 200)
                        animateReset("technologyText", "from-bottom", 200, 200)
                    }}
                ><SelectButtons num={index} setSelectedButton={setTechnologySelected} defaultChecked={technologySelected == index ? true : false} />
                </li>
            )
        })}
    </>)

}