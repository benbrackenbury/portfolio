import NextLink from "next/link"

type LinkProps = {
    id?: any
    className?: any
    href: string,
    newTab?: boolean,
    children: any
}

const Link = ({id=null, className=null, href, newTab=false, children}: LinkProps) => {
    return (
        <NextLink href={href}>
            <a target={newTab ? '_blank' : '_self'} className={className} id={id}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link