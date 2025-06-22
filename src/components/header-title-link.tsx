'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default function HeaderTitleLink(props: PropsWithChildren) {
  const pathname = usePathname()
  return (
    <Link href='/' onClick={() => pathname === '/' && window.scrollTo({top: 0, behavior: 'smooth'})}>
      {props.children}
    </Link>
  )
}
