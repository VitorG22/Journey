export function animateReset(idDoElemento, animationName, delaySum, delayStart) {
    var ArrayDeElementos = Array.from(document.getElementsByClassName(idDoElemento))

    var delay = 1

    ArrayDeElementos.forEach(element => {
        element.classList.add("hidden") 
    })

    setTimeout(() => {
        ArrayDeElementos.forEach(element => {
            delay += delaySum
            element.classList.remove(animationName)

            setTimeout(() => {
                element.classList.add(animationName)
                element.classList.remove("hidden")
                console.log("ola")
            }, delay)

        })
    },delayStart);


}