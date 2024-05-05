'use client'

import ScrollToTop from '@/components/scroll-to-top'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderTitleProps = {
  children: React.ReactNode
}

export default function HeaderTitle(props: HeaderTitleProps) {
  const pathname = usePathname()

  if (pathname === '/') {
    return (
      <ScrollToTop className='cursor-pointer'>{props.children}</ScrollToTop>
    )
  }

  return <Link href='/'>{props.children}</Link>
}
