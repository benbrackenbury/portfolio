import Link from 'next/link'
import React from 'react'

type SocialLinkProps = {
  href: string
  label: string
  children: React.ReactNode
}

export default function SocialLink(props: SocialLinkProps) {
  const { href, label, children } = props

  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="p-1 opacity-50 hover:opacity-100 focus:opacity-100"
    >
      {children}
    </Link>
  )
}
