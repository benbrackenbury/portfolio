import type { NextRouter } from "next/router"

const getCurrentPageSelector = (router: NextRouter) => {
    let classToDim: [string?] = []
    Array.from(router.pathname.replace('/', '.')).map((char, index) => {
        classToDim.push(index === 1 ? char.toUpperCase() : char)
    })
    return classToDim.join('')
}

export default getCurrentPageSelector