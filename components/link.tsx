import NextLink from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

type LinkProps = {
    id?: any
    className?: any
    href: string,
    newTab?: boolean,
    label?: string,
    canBeActive?: boolean
    children: any
}

const Link = ({
    id=null, className=null, href, 
    newTab=false, children, label=href, 
    canBeActive=false
}: LinkProps) => {

    const router = useRouter()
    const anchorRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        if (canBeActive) {
            if (href == router.pathname && anchorRef.current) {
                anchorRef.current.classList.add("active")
            }
        }
    }, [href, canBeActive])

    return (
        <NextLink href={href}>
            <a target={newTab ? '_blank' : '_self'} className={className} id={id} aria-label={label} ref={anchorRef}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link